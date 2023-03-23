class PlansController < ApplicationController
  def index
    @plans = Plan.all
    render json: @plans
  end

  def show
    @plan = Plan.find(params[:id])
    if @plan 
      render json: {
        plan: @plan
      }
    end
  end

end
