class GetAllTargets
  # @param report [Report]
  # @param section [Static::Section]
  # @param category [Static::Category]
  def initialize(report, section, category)
    @report = report
    @section = section
    @static_category = category
    @category = Category.find_by_slug(@static_category.slug)
  end

  # @param year [Integer]
  def call(year)
    MergeStaticAndDynamicTargets.new(
      @static_category.targets,
      @category.targets.where(year: year)
    ).call
  end
end
