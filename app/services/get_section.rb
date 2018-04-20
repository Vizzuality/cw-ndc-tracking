class GetSection
  # @param report [Report]
  def initialize(report)
    @report = report
  end

  # @param slug [String]
  # @param year [Integer]
  # @param section_includes [Array<Symbol>]
  def call(slug, year, section_includes)
    section = Static::Section.find_by_slug(slug)
    return nil unless section
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
