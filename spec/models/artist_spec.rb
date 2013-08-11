require "spec_helper"

describe Artist do
  it "has none to begin with" do
    expect(Artist.count).to eq 0
  end

  it "has one after adding one" do
    Artist.create
    expect(Artist.count).to eq 1
  end

  it "has a name" do
    artist = Artist.create(:name => 'Picasso')
    expect(artist.name).to eq 'Picasso'
  end

  it "starts with no artworks" do
    artist = Artist.create(:name => 'Picasso')
    expect(artist.artworks).to eq []
  end

  it "can have artworks" do
    artist = Artist.create(:name => 'Picasso')
    artwork = Artwork.create(:title => 'Mademoiselles dAvignon')
    artist.artworks << artwork
    expect(artist.artworks.count).to eq 1
  end

  it "starts with no users" do
    artist = Artist.create(:name => 'Picasso')
    expect(artist.users).to eq []
  end

  it "can have many users" do
    artist = Artist.create(:name => 'Picasso')
    user_1 = User.create(:email => 'met@metmuseum.org')
    user_2 = User.create(:email => 'moma@moma.org')
    artist.users << user_1
    artist.users << user_2
    expect(artist.users.length).to eq 2
  end
end