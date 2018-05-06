class MergeStaticAndDynamicCategories
  # @param static_section [Static::Section]
  # @param static_categories [Array<Static::Category>]
  # @param dynamic_categories [Array<Category>]
  def initialize(static_section, static_categories, dynamic_categories)
    @static_section = static_section
    @static_categories = static_categories
    @dynamic_categories = dynamic_categories
  end

  # @param year [Integer]
  # @param options [Hash]
  # @option options [Array<Symbol>] :includes
  # @option options [Boolean] :include_reported
  def call(year, options = {})
    @static_categories.map do |static_category|
      match = @dynamic_categories.detect do |dynamic_category|
        dynamic_category.section_slug == @static_section.slug &&
          dynamic_category.slug == static_category.slug
      end
      category_hash = static_category.to_hash
      category_hash['active'] = match.present?

      if options[:includes].is_a?(Array) &&
          (options[:includes] & [:targets, :indicators]).any?
        category_hash['targets'] = include_targets(
          match,
          static_category,
          year,
          options
        )
      end

      category_hash
    end
  end

  private

  # @param dynamic_category [Category]
  # @param static_category [Static::Category]
  # @param year [Integer]
  # @param options [Hash]
  # @option options [Array<Symbol>] :includes
  # @option options [Boolean] :include_reported
  def include_targets(dynamic_category, static_category, year, options)
    return [] unless dynamic_category.present?
    MergeStaticAndDynamicTargets.new(
      static_category.targets,
      dynamic_category.targets.where(year: year)
    ).call(options)
  end
end
