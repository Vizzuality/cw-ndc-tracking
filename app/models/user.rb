class User < ApplicationRecord
  devise :database_authenticatable,
         # :confirmable,
         :recoverable,
         :registerable,
         :rememberable,
         :validatable,
         :invitable
end
