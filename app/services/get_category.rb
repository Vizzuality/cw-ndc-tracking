class GetCategory
  # @param report [Report]
  # @param static_section [Static::Section]
  def initialize(report, static_section)
    @report = report
    @static_section = static_section
  end

  # @param slug [String]
  # @param year [Integer]
  # @param category_includes [Array<Symbol>]
  def call(slug, year, category_includes)
    category = @static_section.find_category_by_slug(slug)
    return nil unless category
    MergeStaticAndDynamicCategories.new(
      @static_section,
      [category],
      @report.categories.where(section_slug: @static_section.slug, slug: slug)
    ).call(year, category_includes).first
  end
end
