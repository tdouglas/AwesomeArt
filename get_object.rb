# Ajax requests are proving difficult. If we can't figure them out, we can use
# this script. It uses Nokogiri, the parsing gem I used in my first project. We
# can either run this code every time, or run it ahead of time and populate our
# database with some number of objects. Let me know if you have any
# thoughts/questions.

# Nokogiri scrapes a website. Open URI allows Nokogiri to get to that page.
require 'nokogiri'
require 'open-uri'

def get_random_object
  # This creates an array of 220000 numbers, and returns a random one.
  # This is the largest id in the collection I've found so far.
  arr = (1..220000).to_a
  @object_id = arr.shuffle[0].to_s

  # This takes the XML doc from the Museum's website, using the API,
  # and using the random object_id from above.
  data = Nokogiri::XML(open("http://www.brooklynmuseum.org/opencollection/api/?method=collection.getItem&version=1&api_key=6ZrLVBX719&item_type=object&item_id=" + @object_id + "&image_results_limit=1&format=xml"))

  # This finds the object's title, artist, medium, date, and collection.
  @title = data.xpath("//@title").text
  @artist = data.xpath("//@name").text
  @medium = data.xpath("//@medium").text
  @date = data.xpath("//@object_date").text
  @collection = data.xpath("//@collection").text
  # This is a link to the object's page on the museum's website.
  @link = "http://www.brooklynmuseum.org/opencollection/objects/" + @object_id
  # This is a link to an image of the object.
  # if data.xpath("//image")[0]
  @image = data.xpath("//image")[0].values[0]
  # end
end

# This function handles errors. It calls the get_random_object function,
# but if there is no image url it spews an error. So it recursively calls
# itself until it grabs an artwork with an image url
def this_handles_errors
  begin
    get_random_object
  rescue
    # this_handles_errors
    retry
  end
end

# Here I call the function
this_handles_errors

# These just put them to the screen.
puts @title
puts @artist
puts @medium
puts @date
puts @collection
puts @link
puts @image
puts @object_id