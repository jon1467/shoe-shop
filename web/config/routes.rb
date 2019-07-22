Rails.application.routes.draw do
  get 'shopping_carts/index'
  get 'shopping_carts/product_list'
  post 'shopping_carts/add'
  post 'shopping_carts/remove'

  resources :products, only: [:index, :show]

  get 'home/index'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
