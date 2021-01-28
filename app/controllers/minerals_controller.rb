class MineralsController < ApplicationController
  before_action :set_mineral, only: [:show, :update, :destroy]

  # GET /minerals
  def index
    @minerals = Mineral.all

    render json: @minerals
  end

  # GET /minerals/1
  def show
    render json: @mineral
  end

  # POST /minerals
  def create
    @mineral = Mineral.new(mineral_params)

    if @mineral.save
      render json: @mineral, status: :created, location: @mineral
    else
      render json: @mineral.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /minerals/1
  def update
    if @mineral.update(mineral_params)
      render json: @mineral
    else
      render json: @mineral.errors, status: :unprocessable_entity
    end
  end

  # DELETE /minerals/1
  def destroy
    @mineral.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mineral
      @mineral = Mineral.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def mineral_params
      params.require(:mineral).permit(:color, :luster, :steak, :hardness, :cleavage, :fracture, :description, :img_url)
    end
end
