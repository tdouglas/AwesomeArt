require 'spec_helper'

describe 'routes for sessions' do
  it 'routes /log_in to the sessions controller' do
    expect(get('/log_in')).to route_to 'sessions#new'
  end

  it 'routes /sessions to the sessions controller' do
    expect(post('/sessions')).to route_to 'sessions#create'
  end

  it 'routes /log_out to the sessions controller' do
    expect(get('/log_out')).to route_to 'sessions#destroy'
  end

  it 'routes /sign_in to the sessions controller' do
    expect(get('/sign_in')).to route_to 'sessions#new'
  end
end