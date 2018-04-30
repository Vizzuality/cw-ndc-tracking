class Indicator < ApplicationRecord
  belongs_to :target, touch: true

  def reported?
    updated_at > target.created_at
  end
end
