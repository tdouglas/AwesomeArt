AwesomeArt::Application.routes.draw do
  root :to => 'artworks#index'

  get '/users/new' => 'users#new'
  post '/users' => 'users#create'
  post '/sessions' => 'sessions#create'
  delete '/sessions' => 'sessions#destroy'
end
