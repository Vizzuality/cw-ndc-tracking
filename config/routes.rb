Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, path: 'users'

  namespace :api do
    namespace :v1 do
      resources :sections, param: :slug, only: [:index, :show] do
        resources :categories, param: :slug, only: [:index, :show] do
          resources :targets, param: :slug, only: [:index]
        end
      end

      get '(*endpoint)', controller: :api, action: :route_not_found
    end
  end

  root 'application#index'
  get '(*frontend)', to: 'application#index'
end
