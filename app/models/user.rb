class User < ApplicationRecord
  acts_as_token_authenticatable

  devise :database_authenticatable,
         # :confirmable,
         :recoverable,
         :registerable,
         :rememberable,
         :validatable,
         :invitable
end
