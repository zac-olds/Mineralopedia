class CreateJoinTableUsersMinerals < ActiveRecord::Migration[6.1]
  def change
    create_join_table :users, :minerals do |t|
      # t.index [:user_id, :mineral_id]
      # t.index [:mineral_id, :user_id]
    end
  end
end
