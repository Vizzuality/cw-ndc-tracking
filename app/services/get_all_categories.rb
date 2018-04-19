class GetAllCategories
  # @param report [Report]
  def initialize(report)
    @report = report
  end

  # @param section [Static::Section]
  # @params category_includes [Array<Symbol>]
  def call(section, category_includes)
    MergeStaticAndDynamicCategories.new(
      section, section.categories, @report.categories.all
    ).call(category_includes)
  end
end
