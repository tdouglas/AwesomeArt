AwesomeArt::Application.routes.draw do
  root :to => 'artworks#index'

  get '/users/new' => 'users#new'
  post '/users' => 'users#create'
  post '/sessions' => 'sessions#create'
  get '/log_out' => 'sessions#destroy', as: "log_out"
end
