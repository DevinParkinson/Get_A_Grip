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

  def self.mine(ids)
    ids = ids.empty? ? [0] : ids
    Pistol.where("id IN (?)", ids)
  end

end
