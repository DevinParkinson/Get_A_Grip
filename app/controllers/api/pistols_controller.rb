class Api::PistolsController < ApplicationController
  before_action :authenticate_user!, only: [:my_pistol, :update, :delete, :update_modifications]
  before_action :set_pistol, only: [:update, :destroy, :update_pistol]

  def index
    render json: Pistol.all
  end

  def my_pistol
    render json: User.mine(current_user.my_pistol)
    current_user.save
  end

  def create
    item = Pistol.create(pistol_params)
    if pistol.save
      render json: pistol
    else
      render json: { errors: pistol.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    current_user.my_pistol << params[:id].to_i
    current_user.save
    render json: current_user
  end

  def update_pistol
    if @pistol.update(pistol_params)
      render json: @pistol
    else
      render json: { errors: @pistol.errors.full_messages.join(',') }, status: 422
    end
  end

  def update_modifications
    current_user.my_order << modifications[:id]
    current_user.save
    render json: current_user
  end

  def my_order
    render json: User.mine(current_user.my_order)
    current_user.save
  end

  def destroy
    current_user.my_pistol.delete_if{|i| i == @pistol.id}
    current_user.save
    render json: current_user
  end

  private

  def set_pistol
    @pistol = Pistol.find(params[:id])
  end

  def pistol_params
    params.require(:pistol).permit(:make, :pistol_model, :gen, :price, :caliber, :size, :modifications => [], :textures => [], :cerakote => [])
  end

end
