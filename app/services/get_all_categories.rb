class GetAllCategories
  # @param report [Report]
  # @param static_section [Static::Section]
  def initialize(report, static_section)
    @report = report
    @static_section = static_section
  end

  # @param year [Integer]
  # @param category_includes [Array<Symbol>]
  def call(year, category_includes)
    MergeStaticAndDynamicCategories.new(
      @static_section, @static_section.categories, @report.categories.all
    ).call(year, category_includes)
  end
end
