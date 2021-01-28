class UpdateMineralWithMaxAndMin < ActiveRecord::Migration[6.1]
  def change
    add_column :minerals, :hardness_min, :integer
    add_column :minerals, :hardness_max, :integer
    remove_column :minerals, :hardness, :integer
  end
end
