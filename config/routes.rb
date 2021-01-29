Rails.application.routes.draw do
  resources :users
  # resources :comments
  resources :minerals, only: [:index, :show] do
    resources :comments
  end
  
  post '/favorite', to: 'minerals#favorite'
  delete '/favorite', to: 'minerals#unfavorite'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
