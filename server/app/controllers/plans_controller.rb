class PlansController < ApplicationController
  def index
    @plans = Plan.order(id: :asc)

    render json: @plans
  end

  def show
    @plan = Plan.find(params[:id])
    return unless @plan

    render json: {
      plan: @plan
    }
  end

  def add_date
    @user = User.find(params[:userid])
    puts @user.plan_date
    puts '______parasmm', params[:plan_date]
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

  def update_like
    @plans = Plan.all
    @plan = Plan.find(params[:id])
    @plan.likes += 1
    @plan.save
    if @plan.save
      render json: {
        plan: @plan,
        multiple: @plans
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
