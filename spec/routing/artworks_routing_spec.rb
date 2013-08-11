require 'spec_helper'

describe 'routes for artworks' do
  it 'routes / to the artworks controller' do
    expect(get('/')).to route_to 'artworks#index'
  end

  it 'routes /favorites to the artworks controller' do
    expect(get('/favorites')).to route_to 'artworks#favorites'
  end

  it 'routes /favorite to the artworks controller' do
    expect(post('/favorite')).to route_to 'artworks#favorite'
  end

  it 'routes /art_data to the artworks controller' do
    expect(get('/art_data')).to route_to 'artworks#artwork_array'
  end
end