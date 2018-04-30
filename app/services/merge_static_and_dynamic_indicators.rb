class MergeStaticAndDynamicIndicators
  # @param dynamic_category [Category]
  # @param dynamic_target [Target]
  # @param static_indicators [Array<Static::Indicator>]
  # @param dynamic_indicators [Array<Indicator>]
  def initialize(dynamic_category, dynamic_target, static_indicators, dynamic_indicators)
    @dynamic_category = dynamic_category
    @dynamic_target = dynamic_target
    @static_indicators = static_indicators
    @dynamic_indicators = dynamic_indicators
  end

  def call
    @dynamic_indicators.map do |dynamic_indicator|
      match = @static_indicators.detect do |static_indicator|
        dynamic_indicator.slug == static_indicator.slug
      end
      indicator_hash = match&.to_hash || {} # TODO: custom indicators
      if @dynamic_category.section_slug == Static::Section::TRACKING
        indicator_hash['reported'] = dynamic_indicator.reported?
      end
      indicator_hash['updated_at'] = dynamic_indicator.updated_at.
        strftime('%Y-%m-%d %H:%M:%S %z')
      indicator_hash['metadata'] = 'TODO' # TODO
      indicator_hash['values'].each do |value_hash|
        value_hash['value'] = 'zonk'
      end
      indicator_hash
    end
  end
end
