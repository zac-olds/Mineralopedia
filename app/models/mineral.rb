class Mineral < ApplicationRecord
  # ASSOCIATIONS
  has_many :comments
  has_and_belongs_to_many :users
end
