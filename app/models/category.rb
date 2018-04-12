class Category
  include ActiveModel::Model
  include ActiveModel::Serialization
  attr_reader :title, :slug, :targets

  # @param category_config [Hash]
  # @option category_config :categories [Array<Hash>]
  def initialize(category_config)
    @title = category_config[:title]
    @slug = category_config[:slug]
    @targets = category_config[:targets].map do |target_config|
      # TODO: targets are dynamic
      Target.new(target_config.symbolize_keys)
    end
  end

  def attributes
    {'title' => nil, 'slug' => nil}
  end
end
