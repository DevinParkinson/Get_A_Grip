class AddMyOrderToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :my_order, :string
  end
end
