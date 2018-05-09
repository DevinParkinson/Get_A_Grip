class Api::PistolsController < ApplicationController
  before_action :authenticate_user!, only: [:my_pistol, :update, :delete]
  before_action :set_pistol, only: [:update, :delete]

  def index
    render json: Pistol.all
  end

  def my_pistol
    render json: User.mine(current_user.my_pistol)
    current_user.save
  end

  def update
    binding.pry
    current_user.my_pistol << params[:id].to_i
    current_user.save
    render json: current_user
  end

  def delete
    current_user.my_pistol.delete_if{|i| i == @product.id}
    current_user.save
    render json: current_user
  end

  private

  def set_pistol
    @pistol = Pistol.find(params[:id])
  end
end
