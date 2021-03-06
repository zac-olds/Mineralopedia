Rails.application.routes.draw do
  resources :users
  resources :minerals, only: [:index, :show] do
    resources :comments
  end
  
  # FAVORITES
  post '/favorite', to: 'minerals#favorite'
  delete '/favorite', to: 'minerals#unfavorite'
  
  # AUTH
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
