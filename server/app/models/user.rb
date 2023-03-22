class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true , uniqueness: true , length: { minimum: 4 }
  belongs_to :plan , required: false
end
