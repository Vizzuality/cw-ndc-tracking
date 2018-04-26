class GetCategory
  # @param report [Report]
  # @param section [Static::Section]
  def initialize(report, section)
    @report = report
    @section = section
  end

  # @param slug [String]
  # @param year [Integer]
  # @param category_includes [Array<Symbol>]
  def call(slug, year, category_includes)
    category = @section.find_category_by_slug(slug)
    return nil unless category
    MergeStaticAndDynamicCategories.new(
      @section,
      [category],
      @report.categories.where(section_slug: @section.slug, slug: slug)
    ).call(year, category_includes).first
  end
end
