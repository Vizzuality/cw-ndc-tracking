class Report < ApplicationRecord
  belongs_to :user
  has_many :categories, dependent: :delete_all

  # @param years [Array<Integer>]
  # @param force [Boolean] destroy / create
  def initialize_categories(years, force = false)
    planning_section = Static::Section.find_by_slug('planning')
    tracking_section = Static::Section.find_by_slug('tracking')

    categories.delete_all if force

    [planning_section, tracking_section].each do |section|
      mandatory_categories = section.categories.reject(&:optional)
      mandatory_categories.each do |category|
        category = categories.create(
          section_slug: section.slug, slug: category.slug
        )
        years.each do |year|
          category.initialize_targets(year, force)
        end
      end
    end
  end
end
