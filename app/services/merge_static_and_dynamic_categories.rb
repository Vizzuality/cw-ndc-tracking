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
      match = @dynamic_categories.detect do |report_category|
        report_category.section_slug == @static_section.slug &&
          report_category.slug == static_category.slug
      end
      category_hash = static_category.to_hash
      category_hash[:active] = match.present?

      if category_includes.include?(:targets)
        report_targets = match && match.targets.where(year: year).all || []
        category_hash[:targets] = MergeStaticAndDynamicTargets.new(
          static_category.targets,
          report_targets
        ).call
      end

      category_hash
    end
  end
end
