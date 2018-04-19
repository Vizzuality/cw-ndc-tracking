class MergeStaticAndDynamicCategories
  # @param static_categories [Array<Static::Category>]
  # @param report_categories [Array<Category>]
  def initialize(section, static_categories, report_categories)
    @section = section
    @static_categories = static_categories
    @report_categories = report_categories
  end

  # @params category_includes [Array<Symbol>]
  def call(category_includes)
    @static_categories.map do |static_category|
      match = @report_categories.detect do |report_category|
        report_category.section_slug == @section.slug &&
          report_category.slug == static_category.slug
      end
      category_hash = static_category.to_hash(category_includes)
      category_hash[:active] = match.present?
      category_hash
    end
  end
end
