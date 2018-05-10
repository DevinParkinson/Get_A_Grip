class AddMyPistolToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :my_pistol, :string
  end
end
