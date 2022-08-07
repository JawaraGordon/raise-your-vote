Rails.application.routes.draw do
resources :badges
resources :activities
resources :users

  namespace :api do
  post "/signup", to: "users#create"
  get '/me', to: 'users#show'
  get '/guest', to: 'guests#show'
  get '/user', to: 'users#show'
  patch '/user/:id', to: 'users#update'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end