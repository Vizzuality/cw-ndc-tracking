class User < ApplicationRecord
  acts_as_token_authenticatable

  devise :database_authenticatable,
         # :confirmable,
         :recoverable,
         :registerable,
         :rememberable,
         :validatable,
         :invitable

  validates :country_iso_code, presence: true, length: {is: 3}
end
