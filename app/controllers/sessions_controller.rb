class SessionsController < ApplicationController
  def new
    if current_user
      redirect_to root_url
    end
  end

  def create
    @user = User.authenticate(params[:email], params[:password])
    session[:user_id] = @user.id if @user
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end
end
