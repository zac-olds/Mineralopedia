class User < ApplicationRecord
  # ASSOCIATIONS
  has_many :comments
  has_and_belongs_to_many :minerals
  # has_and_belongs_to_many :favorites, class_name: 'Mineral', join_table: 'minerals_users', foreign_key: 'mineral_id', association_foreign_key: 'user_id'
  # alias_attribute :minerals, :favorites

  
  # VALIDATIONS
  has_secure_password
  validates :password, length: {minimum: 6}
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
end
