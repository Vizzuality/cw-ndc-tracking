class Configuration
  include Singleton
  attr_reader :sections

  def initialize
    @configuration = JSON.parse(
      File.read("#{Rails.root}/db/configuration.json")
    ).symbolize_keys
    @sections = @configuration[:sections].map do |section_config|
      Section.new(section_config.symbolize_keys)
    end
  end
end
