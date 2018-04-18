module Static
  class Target
    include ActiveModel::Model
    include ActiveModel::Serialization
    attr_reader :title, :slug, :indicators

    # @param target_config [Hash]
    # @option target_config :categories [Array<Hash>]
    def initialize(target_config)
      @title = target_config[:title]
      @slug = target_config[:slug]
      @indicators = [] # TODO
    end

    def attributes
      {'title' => nil, 'slug' => nil}
    end
  end
end
