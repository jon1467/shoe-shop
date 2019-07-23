Rails.application.routes.draw do
  get 'baskets/index'
  get 'baskets/product_list'
  post 'baskets/add'
  post 'baskets/remove'

  resources :products, only: [:index, :show]

  get 'home/index'
  root 'home#index'
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
