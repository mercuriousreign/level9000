class AddPlanTouser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :plan_date, :string, array: true, default: []
  end
end
