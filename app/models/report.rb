class Report < ApplicationRecord
  has_many :categories

  def initialize_categories
    planning_section = Static::Section.find_by_slug('planning')
    tracking_section = Static::Section.find_by_slug('tracking')

    [planning_section, tracking_section].each do |section|
      mandatory_categories = section.categories.reject(&:optional)
      mandatory_categories.each do |category|
        categories.create(
          section_slug: section.slug, slug: category.slug
        )
      end
    end
  end
end
