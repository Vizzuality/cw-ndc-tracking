class GetAllSections
  # @param report [Report]
  def initialize(report)
    @report = report
  end

  # @param year [Integer]
  # @param options [Hash]
  # @option options [Array<Symbol>] :includes
  def call(year, options = {})
    Static::Section.all.map do |section|
      section_hash = section.to_hash
      if options[:includes].is_a?(Array) &&
          (options[:includes] & [:categories, :targets, :indicators]).any?
        section_hash['categories'] = include_categories(section, year, options)
      end
      section_hash
    end
  end

  private

  # @param static_section [Static::Section]
  # @param year [Integer]
  # @param options [Hash]
  # @option options [Array<Symbol>] :includes
  def include_categories(static_section, year, options = {})
    dynamic_categories = @report.categories.all
    MergeStaticAndDynamicCategories.new(
      static_section,
      static_section.categories,
      dynamic_categories
    ).call(
      year,
      options.merge(include_reported: static_section.tracking?)
    )
  end
end
