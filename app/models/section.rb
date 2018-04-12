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

  # @params includes [Array<String>]
  def self.all(includes = [])
    default_serialization_options = {methods: [:title, :slug]}
    serialization_options =
      if includes.include?(:targets)
        {include: {categories: {include: :targets}}}
      elsif includes.include?(:categories)
        {include: :categories}
      else
        {}
      end

    Configuration.instance.sections.map do |section|
      section.serializable_hash(
        default_serialization_options.merge(serialization_options)
      )
    end
  end
end
