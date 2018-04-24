Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :sections, param: :slug, only: [:index, :show] do
        resources :categories, param: :slug, only: [:index, :show]
      end

      get 'auth/login', to: 'auth#login'
      get 'auth/logout', to: 'auth#logout'

      get :login, to: 'auth#login'

      get '(*endpoint)', controller: :api, action: :route_not_found
    end
  end

  root 'application#index'
  get '(*frontend)', to: 'application#index'
end
