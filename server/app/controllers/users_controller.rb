class UsersController < ApplicationController
  def index
    def index
      @users = User.all
      render json: @users
    end
  end
end
