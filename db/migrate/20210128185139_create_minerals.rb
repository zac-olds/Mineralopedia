class CreateMinerals < ActiveRecord::Migration[6.1]
  def change
    create_table :minerals do |t|
      t.string :color
      t.string :luster
      t.string :steak
      t.integer :hardness
      t.string :cleavage
      t.string :fracture
      t.text :description
      t.string :img_url

      t.timestamps
    end
  end
end
