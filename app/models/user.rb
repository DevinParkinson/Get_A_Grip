class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :pistols

  serialize :my_pistol, Array
  serialize :my_order, Array
  serialize :textures, Array
  serialize :cerakote, Array
  serialize :price, Array

  def self.mine(ids)
    ids = ids.empty? ? [0] : ids
    Pistol.where("id IN (?)", ids)
  end

  def self.get_order(current_user)
    Pistol.find_by_sql("
      SELECT my_order
      WHERE User.id = #{current_user.id}
      ")
  end

end
