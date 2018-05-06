class MergeStaticAndDynamicIndicators
  # @param static_indicators [Array<Static::Indicator>]
  # @param dynamic_indicators [Array<Indicator>]
  def initialize(static_indicators, dynamic_indicators)
    @static_indicators = static_indicators
    @dynamic_indicators = dynamic_indicators
  end

  # @param options [Hash]
  # @option options [Array<Symbol>] :includes
  # @option options [Boolean] :include_reported
  def call(options = {})
    @dynamic_indicators.map do |dynamic_indicator|
      match = @static_indicators.detect do |static_indicator|
        dynamic_indicator.slug == static_indicator.slug
      end
      MergeStaticAndDynamicIndicator.new(match, dynamic_indicator).
        call(options)
    end
  end
end
