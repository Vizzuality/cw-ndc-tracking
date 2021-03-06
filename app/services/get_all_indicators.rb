class GetAllIndicators
  # @param report [Report]
  # @param static_section [Static::Section]
  # @param static_category [Static::Category]
  # @param static_target [Static::Target]
  def initialize(report, static_section, static_category, static_target)
    @report = report
    @static_section = static_section
    @static_category = static_category
    @category = @report.categories.where(
      section_slug: @static_section.slug, slug: @static_category.slug
    ).first
    @static_target = static_target
  end

  # @param year [Integer]
  # @param options [Hash]
  def call(year, options = {})
    return [] unless @category
    @target = @category.targets.where(
      slug: @static_target.slug, year: year
    ).first
    MergeStaticAndDynamicIndicators.new(
      @static_target.indicators,
      @target.indicators
    ).call(options.merge(include_reported: @static_section.tracking?))
  end
end
