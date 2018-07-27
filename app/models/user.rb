class User < ApplicationRecord
  acts_as_token_authenticatable

  ADMIN = 'ADMIN'
  TRUSTED = 'TRUSTED'
  USER = 'USER'

  STATUSES = [ADMIN, TRUSTED, USER]

  devise :database_authenticatable,
         # :confirmable,
         :recoverable,
         :registerable,
         :rememberable,
         :validatable

  validates :country_iso_code, presence: true, length: {is: 3}
  validates :status, inclusion: { in: STATUSES }

  def is_admin?
    status == ADMIN
  end
end
