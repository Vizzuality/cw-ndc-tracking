class MergeStaticAndDynamicCategories
  # @param section [Static::Section]
  # @param static_categories [Array<Static::Category>]
  # @param report_categories [Array<Category>]
  def initialize(section, static_categories, report_categories)
    @section = section
    @static_categories = static_categories
    @report_categories = report_categories
  end

  # @param year [Integer]
  # @param category_includes [Array<Symbol>]
  def call(year, category_includes)
    @static_categories.map do |static_category|
      match = @report_categories.detect do |report_category|
        report_category.section_slug == @section.slug &&
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
