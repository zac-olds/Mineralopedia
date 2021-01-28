class Favorite < ApplicationRecord
  # ASSOCIATIONS
  belongs_to :user, forign_key: true
  belongs_to :mineral, forign_key: true
end
