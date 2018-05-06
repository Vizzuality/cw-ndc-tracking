class Category < ApplicationRecord
  belongs_to :report
  has_many :targets, dependent: :delete_all
  delegate :tracking?, to: :static_section
  delegate :planning?, to: :static_section

  # @param years [Array<Integer>]
  # @param options [Hash]
  # @option options [Boolean] :force destroy / create
  # @option options [Array<Hash>] :cw_values values from Climate Watch
  def initialize_data(years, options)
    force = options[:force] || false
    targets.delete_all if force
    static_category.targets.each do |static_target|
      years.each do |year|
        target = targets.create(slug: static_target.slug, year: year)
        target.initialize_data(options)
      end
    end
  end

  def static_section
    Static::Section.find_by_slug(section_slug)
  end

  def static_category
    static_section.find_category_by_slug(slug)
  end


  def tracking_category
    return self if tracking?
    report.categories.where(
      section_slug: Static::Section::TRACKING, slug: slug
    ).first
  end

  def planning_category
    return self if planning?
    report.categories.where(
      section_slug: Static::Section::PLANNING, slug: slug
    ).first
  end
end
