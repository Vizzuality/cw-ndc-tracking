class Target < ApplicationRecord
  belongs_to :category
  has_many :indicators

  # @param force [Boolean] destroy / create
  def initialize_indicators(force = false)
    indicators.delete_all if force
    static_target.indicators.each do |static_indicator|
      indicator = indicators.create(
        slug: static_indicator.slug,
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
    updated_indicators_count / all_indicators_count
  end

  def static_target
    static_category = category.static_category
    static_category.find_target_by_slug(slug)
  end
end
