module Static
  class Target
    include ActiveModel::Model
    include ActiveModel::Serialization
    attr_reader :title, :summary, :slug, :order, :indicators

    # @param target_config [Hash]
    # @option target_config :categories [Array<Hash>]
    def initialize(target_config)
      @title = target_config[:title]
      @summary = target_config[:summary]
      @slug = target_config[:slug]
      @order = target_config[:order]
      @indicators = target_config[:indicators].
        map.with_index do |indicator_config, idx|
          Static::Indicator.new(indicator_config.symbolize_keys.merge(order: idx))
        end
    end

    def attributes
      {'title' => nil, 'summary' => nil, 'slug' => nil}
    end

    def to_hash
      serializable_hash(
        {
          methods: [:title, :summary, :slug, :order]
        }
      )
    end
  end
end
