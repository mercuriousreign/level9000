class SessionsController < ApplicationController
  @@current_user1 = {}
  def create
    @user = User.find_by(username: session_params[:username])
    @@current_user1 = @user
    session[:current_user_id] = @user.id

    if @user && @user.authenticate(session_params[:password])
      login!

      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: {
        status: 401,
        errors: ['wrong password or username, please try again']
      }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end

  def get_dates; end

  def update
    current_user.plan_id = session_params[:plan_id] if session_params[:plan_id]
    if session_params[:plan_date]
      puts '_______________ 02 _________________', super.current_user
      puts '_______________ 03 _________________', current_user.plan_date
      current_user.plan_date.push(session_params[:plan_date])
    end
    current_user.save
    if current_user.save
      render json: {
        status: :updatedplans,
        user: current_user
      }
    else
      render json: {
        status: 500,
        errors: current_user.errors.full_messages
      }
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end

  def current_user1
    if @@current_user1

      render json: {

        user: @@current_user1
      }
    else
      render json: {

        message: 'no such user'
      }
    end
  end

  def saving_plan
    return unless @@current_user1

    @@current_user1 = params[:user]
    puts 'this is', params[:user]
  end

  private

  def session_params
    params.require(:user).permit(:username, :password, :plan_id, :plan_date, :userid)
  end
end
