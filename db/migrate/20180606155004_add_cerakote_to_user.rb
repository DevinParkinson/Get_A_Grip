class AddCerakoteToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :cerakote, :string
  end
end
