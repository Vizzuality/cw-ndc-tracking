class Report < ApplicationRecord
  belongs_to :user
  has_many :categories, dependent: :delete_all

  # @param years [Array<Integer>]
  # @param options [Hash]
  # @option options [Boolean] :force destroy / create
  # @option options [Array<Hash>] :cw_values values from Climate Watch
  def initialize_data(years, options = {})
    force = options[:force] || false
    categories.delete_all if force

    [tracking_section, planning_section].each do |section|
      mandatory_categories = section.categories.reject(&:optional)
      mandatory_categories.each do |category|
        category = categories.create(
          section_slug: section.slug, slug: category.slug
        )
        category.initialize_data(years, options)
      end
    end
  end

  def planning_section
    Static::Section.find_by_slug(Static::Section::PLANNING)
  end

  def tracking_section
    Static::Section.find_by_slug(Static::Section::TRACKING)
  end
end
