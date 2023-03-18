class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.string :img
      t.string :name
      t.text :description
      t.integer :exercises, array: true, default: []

      t.timestamps
    end
  end
end
