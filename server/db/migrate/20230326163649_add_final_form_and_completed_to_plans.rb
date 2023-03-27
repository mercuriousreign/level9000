class AddFinalFormAndCompletedToPlans < ActiveRecord::Migration[6.1]
  def change
    add_column :plans, :FinalForm, :string
    add_column :plans, :isComplete, :string
  end
end
