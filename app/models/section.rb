class Section
  include ActiveModel::Model
  include ActiveModel::Serialization
  attr_reader :title, :slug, :categories

  # @param section_config [Hash]
  # @option section_config :categories [Array<Hash>]
  def initialize(section_config)
    @title = section_config[:title]
    @slug = section_config[:slug]
    @categories = section_config[:categories].map do |category_config|
      Category.new(category_config.symbolize_keys)
    end
  end

  def attributes
    {'title' => nil, 'slug' => nil}
  end

  # @param includes [Array<String>]
  def self.all(includes = [])
    Configuration.instance.sections.map do |section|
      section.serializable_hash(
        serialization_options(includes)
      )
    end
  end

  # @param slug [String]
  def self.find_by_slug(slug, includes = [])
    result = Configuration.instance.sections.find do |section|
      section.slug == slug
    end
    return nil unless result
    result.serializable_hash(
      serialization_options(includes)
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
