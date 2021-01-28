class User < ApplicationRecord
  # ASSOCIATIONS
  has_many :favorites
  
  # VALIDATIONS
  has_secure_password
  validates :password, length {minimum: 6}
end
