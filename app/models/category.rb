class Category < ApplicationRecord
  belongs_to :report
  has_many :targets, dependent: :delete_all

  # @param year [Integer]
  # @param force [Boolean] destroy / create
  def initialize_targets(year, force = false)
    targets.delete_all if force
    static_category.targets.each do |static_target|
      target = targets.create(slug: static_target.slug, year: year)
      target.initialize_indicators
    end
  end

  def static_category
    static_section = Static::Section.find_by_slug(section_slug)
    static_section.find_category_by_slug(slug)
  end
end
