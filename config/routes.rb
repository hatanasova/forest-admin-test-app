Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  resources :posts
  devise_for :users

  root to: 'posts#index'
end