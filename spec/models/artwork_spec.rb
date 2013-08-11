require "spec_helper"

describe Artwork do
  it "has none to begin with" do
    expect(Artwork.count).to eq 0
  end

  it "has one after adding one" do
    Artwork.create
    expect(Artwork.count).to eq 1
  end

  let(:artwork) {Artwork.create(title: 'Las Meninas', date: '1656', medium: 'oil on canvas', collection: 'Prado', image_url: 'example.com', museum_page_url: 'example.com', image_id: 1)}

  it "has a title" do
    expect(artwork.title).to eq 'Las Meninas'
  end

  it "has a date" do
    expect(artwork.date).to eq '1656'
  end

  it "has a medium" do
    expect(artwork.medium).to eq 'oil on canvas'
  end

  it "has a collection" do
    expect(artwork.collection).to eq 'Prado'
  end

  it "has an image_url" do
    expect(artwork.image_url).to eq 'example.com'
  end

  it "has a museum_page_url" do
    expect(artwork.museum_page_url).to eq 'example.com'
  end

  it "has an image_id" do
    expect(artwork.image_id).to eq 1
  end

  it "should have an artist, usually" do
    artist = Artist.create(name: 'Diego Velazquez')
    artist.artworks << artwork
    expect(artwork.artist.name).to eq 'Diego Velazquez'
  end

  it "can have many users" do
    user_1 = User.create(:email => 'met@metmuseum.org')
    user_2 = User.create(:email => 'moma@moma.org')
    artwork.users << user_1
    artwork.users << user_2
    expect(artwork.users.length).to eq 2
  end
end