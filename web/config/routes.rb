Rails.application.routes.draw do
  get 'orders/index'
  get 'order/:key', to: 'orders#show', as: 'order'
  post 'orders/create'

  get 'baskets/index'
  get 'baskets/show'
  post 'baskets/add'
  delete 'baskets/remove'
  delete 'baskets/clear'

  resources :products, only: [:index, :show]

  get 'home/index'
  root 'home#index'
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
