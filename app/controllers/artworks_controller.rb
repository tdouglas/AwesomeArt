class ArtworksController < ApplicationController
  def index

    @images_array = []
    2.times { @images_array << GetRandomArtwork.get_random_artwork }

  end
  ## demoing json back
  def artwork_array
    @images_array = []
    2.times { @images_array << GetRandomArtwork.get_random_artwork }

    data = @images_array
    render :json => { data: data}

    var artwork = $.ajax({
      url: '/art_data',
      dataType: 'json'
    }).done(function(data){
      console.log(data);
      artwork.data
    })

  end
end