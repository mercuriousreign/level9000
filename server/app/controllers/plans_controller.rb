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
    if @user.plan_date.include? params[:plan_date]
      @user.plan_date.delete(params[:plan_date])
    else
      @user.plan_date.push(params[:plan_date])
    end
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

  def show_date
    @user = User.find(params[:userid])
    render json: {
      plan_date: @user.plan_date
    }
  end

end
