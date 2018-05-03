class Indicator < ApplicationRecord
  belongs_to :target

  after_update do
    target.update_attribute(:updated_at, updated_at)
  end

  def reported?
    updated_at > target.created_at
  end
end
