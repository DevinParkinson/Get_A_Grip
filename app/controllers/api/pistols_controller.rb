class Api::PistolsController < ApplicationController

  def index
    render json: Pistol.all
  end

end
