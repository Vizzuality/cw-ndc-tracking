class GetCategory
  # @param report [Report]
  def initialize(report)
    @report = report
  end

  # @param section [Static::Section]
  # @param slug [String]
  # @params category_includes [Array<Symbol>]
  def call(section, slug, category_includes)
    category = section.find_category_by_slug(slug)
    return nil unless category
    MergeStaticAndDynamicCategories.new(
      section,
      [section.find_category_by_slug(slug)],
      @report.categories.where(section_slug: section.slug, slug: slug)
    ).call(category_includes).first
  end
end
