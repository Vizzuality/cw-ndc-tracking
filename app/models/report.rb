class Report < ApplicationRecord
  has_many :categories, dependent: :delete_all

  # @param years [Array<Integer>]
  # @param force [Boolean] destroy / create
  def initialize_categories(years, force = false)
    planning_section = Static::Section.find_by_slug(Static::Section::PLANNING)
    tracking_section = Static::Section.find_by_slug(Static::Section::TRACKING)

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
