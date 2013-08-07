AwesomeArt::Application.routes.draw do
  root :to => 'artworks#index'

  get "log_in" => "sessions#new", as: "log_in"
  get '/users/new' => 'users#new'
  post '/users' => 'users#create'
  post '/sessions' => 'sessions#create'
  get '/log_out' => 'sessions#destroy', as: "log_out"
  get '/sign_in' => 'sessions#new', as: "sign_in"  #generates new session for user to sign-in
end
