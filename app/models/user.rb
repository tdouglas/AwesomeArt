class User < ActiveRecord::Base
  attr_accessible :screenname, :email, :password, :password_confirmation

  has_and_belongs_to_many :artists
  has_and_belongs_to_many :artworks
end