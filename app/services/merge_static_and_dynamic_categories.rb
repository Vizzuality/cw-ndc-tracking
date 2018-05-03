class MergeStaticAndDynamicCategories
  # @param static_section [Static::Section]
  # @param static_categories [Array<Static::Category>]
  # @param dynamic_categories [Array<Category>]
  def initialize(static_section, static_categories, dynamic_categories)
    @static_section = static_section
    @static_categories = static_categories
    @dynamic_categories = dynamic_categories
  end

  # @param year [Integer]
  # @param category_includes [Array<Symbol>]
  def call(year, category_includes)
    @static_categories.map do |static_category|
      match = @dynamic_categories.detect do |dynamic_category|
        dynamic_category.section_slug == @static_section.slug &&
          dynamic_category.slug == static_category.slug
      end
      category_hash = static_category.to_hash
      category_hash['active'] = match.present?

      if category_includes.include?(:targets)
        category_hash['targets'] = include_targets(
          match,
          static_category,
          year
        )
      end

      category_hash
    end
  end

  private

  def include_targets(dynamic_category, static_category, year)
    return [] unless dynamic_category.present?
    MergeStaticAndDynamicTargets.new(
      dynamic_category,
      static_category.targets,
      dynamic_category.targets.where(year: year)
    ).call
  end
end
