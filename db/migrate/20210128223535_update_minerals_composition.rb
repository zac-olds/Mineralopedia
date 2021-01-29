class UpdateMineralsComposition < ActiveRecord::Migration[6.1]
  def change
    add_column :minerals, :composition, :string
  end
end
 