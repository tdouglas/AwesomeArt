require 'spec_helper'

describe SessionsController do
  it "signs a user out" do
    get :destroy
    expect(session[:user_id]).to eq nil
  end

  it "signs in a user" do
    expect('confused').to eq 'confused'
  end
end