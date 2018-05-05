class CreatePistols < ActiveRecord::Migration[5.1]
  def change
    create_table :pistols do |t|
      t.string :make
      t.string :pistol_model
      t.string :size
      t.string :gen
      t.string :caliber
      t.float :price
      t.text :modifications
      t.text :textures
      t.text :cerakote
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
