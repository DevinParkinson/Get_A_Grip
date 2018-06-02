class Pistol < ApplicationRecord
  serialize :modifications, Array
  serialize :textures, Array
  serialize :cerakote, Array

  def self.get_order(current_user)
    Pistol.find_by_sql("
      SELECT my_order
      FROM users
      WHERE id = #{current_user.id}
      ")
  end
end
