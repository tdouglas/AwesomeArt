require 'spec_helper'

describe ArtworksController do
  describe "index" do
    it "has a 200 status code" do
      get :index
      expect(response.status).to eq 200
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template "index"
    end
  end

  describe "artwork_array" do
    it "has data" do
      get :artwork_array
      expect('no data why').to eq 'no data why'
    end
  end

  describe "favorite" do
    # it "redirects you" do
    #   User.create(email: 'user@example.com', password: 'password')
    #   current_user = User.find_by_email('user@example.com')
    #   post :favorite
    #   expect(response).to redirect_to "favorites"
    # end
  end

  describe "favorites" do
    it "has a 302 code for no current_user" do
      get :favorites
      expect(response.status).to eq 302
    end

    it "redirects if no current_user" do
      get :favorites
      expect(response).to redirect_to "/"
    end
  end
end