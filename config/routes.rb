Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :posts, except: [:new, :edit]
    resources :playlists, except: [:new, :edit]
    resources :likes, except: [:new, :edit]
  end


end
