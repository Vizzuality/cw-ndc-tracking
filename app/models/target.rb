class Target < ApplicationRecord
  belongs_to :category
  has_many :indicators
  delegate :tracking?, to: :category
  delegate :planning?, to: :category

  # @param options [Hash]
  # @option options [Boolean] :force destroy / create
  # @option options [Array<Hash>] :cw_values values from Climate Watch
  def initialize_data(options)
    force = options[:force] || false
    indicators.delete_all if force
    static_target.indicators.each do |static_indicator|
      values = nil
      if options[:cw_values]
        value_from_cw = options[:cw_values].detect do |e|
          e[:slug] == static_indicator.slug
        end
        values = value_from_cw && [value_from_cw[:value]]
      end

      create_indicator(static_indicator, values)

      if static_section.planning?
        # TODO: eventually not all indicators will be trackable
        initialize_indicator_in_tracking_target(static_indicator)
      end
    end
  end

  def reported_percentage
    all_indicators_count = indicators.count
    return 0 if all_indicators_count.zero?
    updated_indicators_count = indicators.
      where('updated_at > ?', created_at).count
    updated_indicators_count.to_f * 100 / all_indicators_count
  end

  def static_target
    static_category = category.static_category
    static_category.find_target_by_slug(slug)
  end

  def static_section
    Static::Section.find_by_slug(category.section_slug)
  end

  def initialize_indicator_in_tracking_target(static_indicator)
    if tracking_target
      tracking_target.create_indicator(static_indicator, nil)
    end
  end

  def create_indicator(static_indicator, values)
    indicators.create(
      slug: static_indicator.slug,
      values: values,
      created_at: self.created_at,
      updated_at: self.created_at
    )
  end

  def tracking_target
    return self if tracking?
    category.tracking_category&.targets&.find_by_slug(slug)
  end

  def planning_target
    return self if planning?
    category.planning_category&.targets&.find_by_slug(slug)
  end
end
