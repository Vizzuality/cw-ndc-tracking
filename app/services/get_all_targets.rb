class GetAllTargets
  # @param report [Report]
  # @param static_section [Static::Section]
  # @param category [Static::Category]
  def initialize(report, static_section, static_category)
    @report = report
    @static_section = static_section
    @static_category = static_category
    @category = @report.categories.where(
      section_slug: @static_section.slug, slug: @static_category.slug
    ).first
  end

  # @param year [Integer]
  def call(year)
    return [] unless @category
    MergeStaticAndDynamicTargets.new(
      @static_category.targets,
      @category.targets.where(year: year)
    ).call(include_reported: @static_section.tracking?)
  end
end
