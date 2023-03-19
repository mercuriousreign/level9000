Rails.application.routes.draw do
  get 'plans/index'
  get 'users/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index]
  resources :plans, only: [:index]
end
