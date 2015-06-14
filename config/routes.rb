Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :posts, except: [:new, :edit, :index]
    get ":filter/posts", to: "posts#index"
    resources :playlists, except: [:new, :edit]
    get ":filter/playlists", to: "playlists#index"
    resources :likes, except: [:new, :edit]
    resources :follows, except: [:new, :edit]
    resources :users, only: [:show]
  end


end
