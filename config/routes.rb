Rails.application.routes.draw do
  
  namespace :api do
    resources :badges
    resources :activities
    resources :users
  post "/signup", to: "users#create"
  get '/me', to: 'users#show'
  get '/guest', to: 'guests#show'
  get '/user', to: 'users#show'
  get '/user/:id', to: 'users#index'
  delete '/user/:id', to: 'users#destroy'
  patch '/user/:id', to: 'users#update'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/badges', to: 'badges#index'
  delete '/badges/:id', to: 'badges#destroy'
  get '/activities', to: 'activities#index'
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end