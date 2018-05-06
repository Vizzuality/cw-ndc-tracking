class Target < ApplicationRecord
  belongs_to :category
  has_many :indicators

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
      indicator = indicators.create(
        slug: static_indicator.slug,
        values: values,
        created_at: self.created_at,
        updated_at: self.created_at
      )
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
end
