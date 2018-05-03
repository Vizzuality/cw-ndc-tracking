class MergeStaticAndDynamicTargets
  # @param dynamic_category [Category]
  # @param static_targets [Array<Static::Target>]
  # @param dynamic_targets [Array<Target>]
  def initialize(dynamic_category, static_targets, dynamic_targets)
    @dynamic_category = dynamic_category
    @static_targets = static_targets
    @dynamic_targets = dynamic_targets
  end

  def call
    @dynamic_targets.map do |dynamic_target|
      match = @static_targets.detect do |static_target|
        dynamic_target.slug == static_target.slug
      end
      target_hash = match&.to_hash || {} # TODO: custom targets
      target_hash['year'] = dynamic_target.year
      if @dynamic_category.section_slug == Static::Section::TRACKING
        target_hash['reported_percentage'] = dynamic_target.reported_percentage
      end
      target_hash['updated_at'] = dynamic_target.updated_at.
        strftime('%Y-%m-%d %H:%M:%S %z')
      target_hash
    end
  end
end