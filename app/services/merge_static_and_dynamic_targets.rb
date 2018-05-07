class MergeStaticAndDynamicTargets
  # @param static_targets [Array<Static::Target>]
  # @param dynamic_targets [Array<Target>]
  def initialize(static_targets, dynamic_targets)
    @static_targets = static_targets
    @dynamic_targets = dynamic_targets
  end

  # @param options [Hash]
  # @option options [Array<Symbol>] :includes
  # @option options [Boolean] :include_reported
  def call(options = {})
    @dynamic_targets.map do |dynamic_target|
      match = @static_targets.detect do |static_target|
        dynamic_target.slug == static_target.slug
      end
      target_hash = match&.to_hash || {} # TODO: custom targets
      target_hash['year'] = dynamic_target.year
      if options[:include_reported]
        target_hash['reported_percentage'] = dynamic_target.reported_percentage
      end
      target_hash['updated_at'] = dynamic_target.updated_at.
        strftime('%Y-%m-%d %H:%M:%S %z')
      if options[:includes].is_a?(Array) &&
          options[:includes].include?(:indicators)
        target_hash['indicators'] = include_indicators(
          dynamic_target,
          match,
          options
        )
      end

      target_hash
    end
  end

  private

  def include_indicators(dynamic_target, static_target, options)
    return [] unless dynamic_target.present?
    MergeStaticAndDynamicIndicators.new(
      static_target.indicators,
      dynamic_target.indicators
    ).call(options)
  end
end
