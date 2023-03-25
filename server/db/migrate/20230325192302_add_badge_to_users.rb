class AddBadgeToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :badges, :string, array: true, default: []
  end
end
