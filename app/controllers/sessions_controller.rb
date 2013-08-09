class SessionsController < ApplicationController
  def new
    if current_user
      redirect_to root_url
    end
  end

  def create
    @user = User.authenticate(params[:email], params[:password])
    if @user
      session[:user_id] = @user.id
    else

    end
    respond_to do |format|
      format.js {  }
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end
end
