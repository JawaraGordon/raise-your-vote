Rails.application.routes.draw do
  resources :badges
  resources :activities
  resources :users
  post "/signup", to: "users#create"
  get '/authorized_user', to: 'users#show'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end