class Artist < ActiveRecord::Base
  attr_accessible :name
  has_many :artworks
  has_and_belongs_to_many :users
end