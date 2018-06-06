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

  def self.get_textures(current_user)
    Pistol.find_by_sql("
      SELECT textures
      FROM users
      WHERE id = #{current_user.id}
      ")
  end

  def self.get_cerakote(current_user)
    Pistol.find_by_sql("
      SELECT cerakote
      FROM users
      WHERE id = #{current_user.id}
      ")
  end

  def self.get_price(current_user)
    Pistol.find_by_sql("
      SELECT price
      FROM users
      WHERE id = #{current_user.id}
      ")
  end
end
