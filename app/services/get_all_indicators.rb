class GetAllIndicators
  # @param report [Report]
  # @param static_section [Static::Section]
  # @param category [Static::Category]
  # @param static_target [Static::Target]
  def initialize(report, static_section, category, static_target)
    @report = report
    @static_section = static_section
    @static_category = category
    @category = @report.categories.where(
      section_slug: @static_section.slug, slug: @static_category.slug
    ).first
    @static_target = static_target
  end

  # @param year [Integer]
  def call(year)
    @target = @category.targets.where(slug: @static_target.slug, year: year).first
    MergeStaticAndDynamicIndicators.new(
      @category,
      @target,
      @static_target.indicators,
      @target.indicators
    ).call
  end
end
