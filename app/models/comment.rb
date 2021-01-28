class Comment < ApplicationRecord
  # ASSOCIATIONS
  belongs_to :mineral
  belongs_to :user
end
