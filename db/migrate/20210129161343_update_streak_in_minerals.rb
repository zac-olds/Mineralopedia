class UpdateStreakInMinerals < ActiveRecord::Migration[6.1]
  def change
    add_column :minerals, :streak, :string
    remove_column :minerals, :steak, :string
  end
end
