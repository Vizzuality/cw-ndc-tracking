class GetCategory
  # @param report [Report]
  # @param static_section [Static::Section]
  def initialize(report, static_section)
    @report = report
    @static_section = static_section
  end

  # @param slug [String]
  # @param year [Integer]
  # @param options [Hash]
  # @option options [Array<Symbol>] :includes
  def call(slug, year, options = {})
    category = @static_section.find_category_by_slug(slug)
    return nil unless category
    MergeStaticAndDynamicCategories.new(
      @static_section,
      [category],
      @report.categories.where(section_slug: @static_section.slug, slug: slug)
    ).call(
      year, options.merge(include_reported: @static_section.tracking?)
    ).first
  end
end
