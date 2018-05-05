class Pistol < ApplicationRecord
  serialize :modifications, Array
  serialize :textures, Array
  serialize :cerakote, Array
end
