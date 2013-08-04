# Ajax requests are proving difficult. If we can't figure them out, we can use
# this script. It uses Nokogiri, the parsing gem I used in my first project. We
# can either run this code every time, or run it ahead of time and populate our
# database with some number of objects. Let me know if you have any
# thoughts/questions.

# Nokogiri scrapes a website. Open URI allows Nokogiri to get to that page.
require 'nokogiri'
require 'open-uri'

# This creates an array of 2000 numbers, and returns a random one.
# I chose 2000 randomly. It could be anything.
arr = (1..2000).to_a
object_id = arr.shuffle[0].to_s

# This takes the XML doc from the Museum's website, using the API,
# and using the random object_id from above.
data = Nokogiri::XML(open("http://www.brooklynmuseum.org/opencollection/api/?method=collection.getItem&version=1&api_key=6ZrLVBX719&item_type=object&item_id=" + object_id + "&image_results_limit=1&format=xml"))

# This finds the object's title, artist, medium, and date.
title = data.xpath("//@title").text
artist = data.xpath("//@name").text
medium = data.xpath("//@medium").text
date = data.xpath("//@object_date").text

# This finds the URLs associated with the object.
uri = data.xpath("//@uri")
# This is a link to the object's page on the museum's website.
link = uri[0]
# This is a link to an image of the object.
image = uri[1]

# These just put them to the screen.
puts title
puts artist
puts medium
puts date
puts link
puts image
puts ob_id