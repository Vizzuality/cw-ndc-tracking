module Static
  class Category
    include ActiveModel::Model
    include ActiveModel::Serialization
    attr_reader :title, :slug, :optional, :order, :targets

    # @param category_config [Hash]
    # @option category_config :categories [Array<Hash>]
    def initialize(category_config)
      @title = category_config[:title]
      @slug = category_config[:slug]
      @optional = category_config[:optional]
      @order = category_config[:order]
      @targets = category_config[:targets].
        map.with_index do |target_config, idx|
          Static::Target.new(target_config.symbolize_keys.merge(order: idx))
        end
    end

    def attributes
      {'title' => nil, 'slug' => nil, 'optional' => nil}
    end

    # @param slug [String]
    def find_target_by_slug(slug)
      targets.find do |target|
        target.slug == slug
      end
    end

    def to_hash
      serializable_hash(
        {
          methods: [:title, :slug, :optional, :order]
        }
      )
    end
  end
end
