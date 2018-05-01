class Category < ApplicationRecord
  belongs_to :report
  has_many :targets, dependent: :delete_all

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

  def static_category
    static_section = Static::Section.find_by_slug(section_slug)
    static_section.find_category_by_slug(slug)
  end
end
