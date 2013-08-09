class UsersController < ApplicationController
  def new
    if current_user
      redirect_to root_url
    end

    @user = User.new
  end

  def create
    @user = User.create(params[:user])
    session[:user_id] = @user.id if @user.save
  end
end