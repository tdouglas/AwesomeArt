class ArtworksController < ApplicationController
  def index

  end
  ## demoing json back

  def artwork_array
    @images_array = []
    10.times { @images_array << GetRandomArtwork.get_random_artwork }

    data = @images_array
    render :json => { data: data}

  end

  def favorite
    @artwork = Artwork.find_or_create_by_image_id(params[:artwork_id])
    @artwork.title = params[:title]
    @artwork.date = params[:date]
    @artwork.medium = params[:medium]
    @artwork.collection = params[:collection]
    @artwork.image_url = params[:image_url]
    @artwork.museum_page_url = params[:link]
    @artwork.image_id = params[:image_id]
    @artwork.save

    @artist = Artist.find_or_create_by_name(params[:artist])
    @artist.save

    @artist.artworks << @artwork

    current_user.artworks << @artwork

    redirect_to '/favorites'
  end

  def favorites
    if current_user == nil
      redirect_to root_url
    end

    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end

