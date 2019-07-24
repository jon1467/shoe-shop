class OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def show
    @order = Order.find_by_key(params[:key])
  end

  def create
    product_list = params.permit('product_list': {})
    key = SecureRandom.uuid
    @order = Order.create(product_ids: product_list, key: key)

    helpers.clear_basket

    redirect_to order_path(key: @order.key)
  end
end
