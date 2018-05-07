class GetAllCategories
  # @param report [Report]
  # @param static_section [Static::Section]
  def initialize(report, static_section)
    @report = report
    @static_section = static_section
  end

  # @param year [Integer]
  # @param options [Hash]
  # @option options [Array<Symbol>] :includes
  def call(year, options = {})
    MergeStaticAndDynamicCategories.new(
      @static_section, @static_section.categories, @report.categories.all
    ).call(year, options.merge(include_reported: @static_section.tracking?))
  end
end
