class Indicator < ApplicationRecord
  belongs_to :target
  delegate :tracking?, to: :target

  after_update do
    target.update_attribute(:updated_at, updated_at)
  end

  validate :validate_arity

  def validate_arity
    expected_length = static_indicator.values.length
    return true if values.nil? ||
      values.is_a?(Array) && values.length == expected_length
    errors[:values] << 'Must be an array of #{expected_length} elements'
  end

  # @param value [Hash]
  # @option value [String] :label
  # @option value :value
  def update_value(value)
    value_index = self.static_indicator.values.index do |v|
      v[:label] == value[:label]
    end
    unless value_index
      errors[:values] << 'Unknown value label'
      return false
    end
    self.values = Array.new(static_indicator.values.length) if values.nil?
    self.values[value_index] = value[:value]
    update_attributes(values: values)
  end

  def reported?
    updated_at > target.created_at
  end

  def static_indicator
    static_target = target.static_target
    static_target.find_indicator_by_slug(slug)
  end
end
