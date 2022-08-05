Rails.application.routes.draw do
  resources :badges
  resources :activities
  resources :users
  namespace :api do
    resources :recipes, only: [:index, :create]
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end