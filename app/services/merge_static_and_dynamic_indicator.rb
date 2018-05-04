class MergeStaticAndDynamicIndicator
  def initialize(static_indicator, dynamic_indicator)
    @static_indicator = static_indicator
    @dynamic_indicator = dynamic_indicator
  end

  def call(options = {})
    indicator_hash = @static_indicator&.to_hash || {} # TODO: custom indicators
    indicator_hash['id'] = @dynamic_indicator.id
    if options[:include_reported]
      indicator_hash['reported'] = @dynamic_indicator.reported?
    end
    indicator_hash['updated_at'] = @dynamic_indicator.updated_at.
      strftime('%Y-%m-%d %H:%M:%S %z')
    indicator_hash['metadata'] = 'TODO' # TODO
    indicator_hash['values'].each.with_index do |value_hash, idx|
      value_hash['value'] = @dynamic_indicator.values&.at(idx)
    end
    indicator_hash
  end
end
