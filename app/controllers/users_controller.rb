class UsersController < ApplicationController
  def new
    if current_user
      redirect_to root_url
    end

    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_url, :notice => "Signed up!"
    else
      render "new"
    end
    # respond_to do |format|
    #   format.json { render :json => @user.to_json}
    # end
  end
end