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


  def add_date
    @user = User.find(params[:userid])
    puts @user.plan_date
    puts "______parasmm", params[:plan_date]
    @user.plan_date.push(params[:plan_date])
    @user.save
    if @user.save
      render json: {
        user: @user
      }
    else
      render json: {
        status: 500,
        errors: @user.errors.full_messages
      }
    end
  end

end
