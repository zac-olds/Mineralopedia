class MineralsController < ApplicationController
  before_action :set_mineral, only: [:show]

  # GET /minerals
  def index
    @minerals = Mineral.all

    render json: @minerals
  end

  # GET /minerals/1
  def show
    render json: @mineral
  end

  # POST /favorite
  def favorite
    @mineral = Mineral.find(params[:mineral_id])
    @user = User.find(params[:user_id])
    @user.minerals << @mineral
    render json: @user, include :minerals
  end

  # DESTROY /favorite/1
  def unfavorite
    @mineral = Mineral.find(params[:mineral_id])
    @user = User.find(params[:user_id])
    @user.minerals.delete(@mineral)
    render json: @user, include :minerals
  end

  private
    # Use callbacks to share common setup or constraints between actions.
  def set_mineral
    @mineral = Mineral.find(params[:id])
  end

    # Only allow a list of trusted parameters through.
    def mineral_params
      params.require(:mineral).permit(:name, :color, :luster, :streak, :hardness_min, :hardness_max, :cleavage, :fracture, :description, :img_url)
    end
end
