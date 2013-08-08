class Artwork < ActiveRecord::Base
  attr_accessible :title, :date, :medium, :collection, :image_url, :museum_page_url, :image_id
  belongs_to :artist
  has_and_belongs_to_many :users

end

