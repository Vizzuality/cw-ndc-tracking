class Section
  include ActiveModel::Model
  include ActiveModel::Serialization
  attr_reader :title, :slug, :categories

  # @param section_config [Hash]
  # @option section_config :categories [Array<Hash>]
  def initialize(section_config)
    @title = section_config[:title]
    @slug = section_config[:slug]
    @categories = section_config[:categories].
      map.with_index do |category_config, idx|
        Category.new(category_config.symbolize_keys.merge(order: idx))
      end
  end

  def attributes
    {'title' => nil, 'slug' => nil}
  end

  def self.all
    Configuration.instance.sections
  end

  # @param slug [String]
  def self.find_by_slug(slug)
    Configuration.instance.sections.find do |section|
      section.slug == slug
    end
  end

  # @param slug [String]
  def find_category_by_slug(slug)
    categories.find do |section|
      section.slug == slug
    end
  end

  # @param includes [Array<Symbol>]
  def to_hash(includes = [])
    serializable_hash(
      Section.serialization_options(includes)
    )
  end

  def self.serialization_options(includes)
    default_serialization_options = {methods: [:title, :slug]}
    custom_serialization_options =
      if includes.include?(:targets)
        {include: {categories: {include: :targets}}}
      elsif includes.include?(:categories)
        {include: :categories}
      else
        {}
      end
    default_serialization_options.merge(custom_serialization_options)
  end
end
