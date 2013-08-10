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

  def favorites

  end
end

#define a method and call it twice