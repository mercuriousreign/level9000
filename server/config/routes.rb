Rails.application.routes.draw do
  get 'plans/index'
  # get 'users/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  get '/users/plans/:id', to: 'users#show_plans'
  post '/users/plans/:id', to: 'users#id'
  post '/useru', to: 'sessions#update'
  post '/plans/date/:userid', to: "plans#add_date"
  get '/plans/date/:userid', to: "plans#show_date"

  resources :users, only: %i[create show index update] do
    resources :items, only: %i[create show index destroy]
  end
  resources :plans, only: [:index,:show]
end
