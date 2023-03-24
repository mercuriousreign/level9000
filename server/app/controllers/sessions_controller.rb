class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: session_params[:username])
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
        errors: ['no such user, please try again']
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

  def get_dates

  end


  def update
    if session_params[:plan_id]
      current_user.plan_id = session_params[:plan_id]
    end
    if session_params[:plan_date]
      puts "_______________ 02 _________________", super.current_user()
      puts "_______________ 03 _________________", current_user.plan_date
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

  private

  def session_params
    params.require(:user).permit(:username, :password, :plan_id, :plan_date, :userid)
  end
end
