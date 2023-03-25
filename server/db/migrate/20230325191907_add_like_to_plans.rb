class AddLikeToPlans < ActiveRecord::Migration[6.1]
  def change
    add_column :plans, :likes, :integer, default: 0
  end
end
