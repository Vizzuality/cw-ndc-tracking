class MergeStaticAndDynamicTargets
  # @param static_targets [Array<Static::Target>]
  # @param dynamic_targets [Array<Target>]
  def initialize(static_targets, dynamic_targets)
    @static_targets = static_targets
    @dynamic_targets = dynamic_targets
  end

  def call
    @dynamic_targets.map do |report_target|
      match = @static_targets.detect do |static_target|
        report_target.slug == static_target.slug
      end
      target_hash = match&.to_hash || {} # TODO: custom targets
      target_hash[:year] = report_target.year
      target_hash[:reported_percentage] = 0 # TODO: calculate for tracking, omit for planning
      target_hash[:updated_at] = report_target.updated_at.
        strftime('%Y-%m-%d %H:%M:%S %z') # TODO:
      target_hash
    end
  end
end