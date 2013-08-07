class ArtworksController < ApplicationController
  def index

    require 'open-uri'

    @images_array = []

    def get_random_artwork
      begin
        # This creates an array of 220000 numbers, and returns a random one.
        # This is the largest id in the collection I've found so far.
        arr = (1..220000).to_a
        @artwork_id = arr.shuffle[0].to_s

        @image_hash = {}

        # This takes the XML doc from the Museum's website, using the API,
        # and using the random object_id from above.
        @url = "http://www.brooklynmuseum.org/opencollection/api/?method=collection.getItem&version=1&api_key=6ZrLVBX719&item_type=object&item_id=" + @artwork_id + "&image_results_limit=1&format=xml"
        data = Nokogiri::XML(open(@url))

        # This is a link to an image of the object.
        @image_url = data.xpath("//image")[0].values[0]
        # This ensures that we get an image of proper size
        # If we don't it raises an error and we retry
        if (@image_url.include? "size2") == false
          raise
        end

        # This finds the object's title, artist, medium, date, and collection.
        @title = data.xpath("//@title").text
        @artist = data.xpath("//@name").text
        @medium = data.xpath("//@medium").text
        @date = data.xpath("//@object_date").text
        @collection = data.xpath("//@collection").text
        # This is a link to the object's page on the museum's website.
        @link = "http://www.brooklynmuseum.org/opencollection/objects/" + @artwork_id

        @image_hash[:image_url] = @image_url
        @image_hash[:title] = @title
        @image_hash[:artist] = @artist
        @image_hash[:medium] = @medium
        @image_hash[:date] = @date
        @image_hash[:collection] = @collection
        @image_hash[:link] = @link
        @image_hash[:artwork_id] = @artwork_id

        @images_array << @image_hash

      rescue
        retry
      end
    end

    # This gets 10 random images on page load

    2.times { get_random_artwork }

  end
end