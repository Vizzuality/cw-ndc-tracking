class MergeStaticAndDynamicIndicators
  # @param dynamic_target [Target]
  # @param static_indicators [Array<Static::Indicator>]
  # @param dynamic_indicators [Array<Indicator>]
  def initialize(dynamic_target, static_indicators, dynamic_indicators)
    @dynamic_target = dynamic_target
    @static_indicators = static_indicators
    @dynamic_indicators = dynamic_indicators
  end

  def call(options = {})
    @dynamic_indicators.map do |dynamic_indicator|
      # TODO: opportunity to simplify
      static_indicator = dynamic_indicator.static_indicator
      MergeStaticAndDynamicIndicator.new(static_indicator, dynamic_indicator).
        call(options)
    end
  end
end
