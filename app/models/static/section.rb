module Static
  class Section
    include ActiveModel::Model
    include ActiveModel::Serialization
    attr_reader :title, :slug, :categories

    PLANNING = 'planning'.freeze
    TRACKING = 'tracking'.freeze

    # @param section_config [Hash]
    # @option section_config :categories [Array<Hash>]
    def initialize(section_config)
      @title = section_config[:title]
      @slug = section_config[:slug]
      @categories = section_config[:categories].
        map.with_index do |category_config, idx|
          Static::Category.new(category_config.symbolize_keys.merge(order: idx))
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
      categories.find do |category|
        category.slug == slug
      end
    end

    def to_hash
      serializable_hash(methods: [:title, :slug])
    end

    def tracking?
      @slug == TRACKING
    end
  end
end
