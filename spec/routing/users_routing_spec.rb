require 'spec_helper'

describe 'routes for users' do
  it 'routes /sign_up to the users controller' do
    expect(get('/sign_up')).to route_to 'users#new'
  end

  it 'routes /users to the users controller' do
    expect(post('/users')).to route_to 'users#create'
  end
end