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
      @targets = category_config[:targets].map do |target_config|
        # TODO: targets are dynamic
        Target.new(target_config.symbolize_keys)
      end
    end

    def attributes
      {'title' => nil, 'slug' => nil, 'optional' => nil}
    end

    # @param includes [Array<Symbol>]
    def to_hash(includes = [])
      serializable_hash(
        Category.serialization_options(includes)
      )
    end

    def self.serialization_options(includes)
      default_serialization_options = {
        methods: [:title, :slug, :optional, :order]
      }
      custom_serialization_options =
        if includes.include?(:targets)
          {include: :targets}
        else
          {}
        end
      default_serialization_options.merge(custom_serialization_options)
    end
  end
end
