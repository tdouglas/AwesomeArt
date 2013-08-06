AwesomeArt::Application.routes.draw do
  root :to => 'artworks#index'

  post '/users/create' => 'users#create'
  post '/sessions' => 'sessions#create'
  delete '/sessions' => 'sessions#destroy'
end
