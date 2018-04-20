class GetAllCategories
  # @param report [Report]
  # @param section [Static::Section]
  def initialize(report, section)
    @report = report
    @section = section
  end

  # @param year [Integer]
  # @param category_includes [Array<Symbol>]
  def call(year, category_includes)
    MergeStaticAndDynamicCategories.new(
      @section, @section.categories, @report.categories.all
    ).call(year, category_includes)
  end
end
