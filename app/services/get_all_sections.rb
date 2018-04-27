class GetAllSections
  # @param report [Report]
  def initialize(report)
    @report = report
  end

  # @param year [Integer]
  # @param category_includes [Array<Symbol>]
  def call(year, section_includes)
    Static::Section.all.map do |section|
      section_hash = section.to_hash
      if (section_includes & [:categories, :targets]).any?
        report_categories = @report.categories.all
        section_hash[:categories] = MergeStaticAndDynamicCategories.new(
          section,
          section.categories,
          report_categories
        ).call(year, section_includes)
      end
      section_hash
    end
  end
end