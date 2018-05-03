module Static
  class Indicator
    include ActiveModel::Model
    include ActiveModel::Serialization
    attr_reader :title, :slug, :order, :values

    # @param indicator_config [Hash]
    def initialize(indicator_config)
      @title = indicator_config[:title]
      @slug = indicator_config[:slug]
      @order = indicator_config[:order]
      @values = indicator_config[:values].
        map do |value_config|
          value_config['label'] = 'Value' unless value_config['label'].present?
          value_config.symbolize_keys
        end
    end

    def attributes
      {'title' => nil, 'slug' => nil, 'values' => []}
    end

    def to_hash
      serializable_hash(
        {
          methods: [:title, :slug, :order, :values]
        }
      )
    end
  end
end
