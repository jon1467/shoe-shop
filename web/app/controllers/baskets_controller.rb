class BasketsController < ApplicationController
  def index
    session[:basket] ||= {}
    render json: session[:basket]
  end

  def show
    @basket = {}
    session[:basket] ||= {}
    session[:basket].each do |product_id, quantity|
      p = Product.find(product_id.to_i)
      @basket[product_id] = {
        quantity: quantity,
        product: p,
        imagePath: helpers.product_image_url(p.id),
        productPath: product_url(p)
      }
    end
    @basket
  end

  def add
    id = params[:id]
    product = Product.find(id)

    if product.stock > 0
      product.decrease_stock
      StockRestoreJob.set(wait: 15.minutes).perform_later(id)

      # JSON doesn't support integer keys
      id = id.to_s
      session[:basket] ||= {}
      session[:basket][id] ||= 0
      session[:basket][id] += 1

      BroadcastStockJob.perform_now(product)
      BroadcastBasketJob.perform_now(params[:basket_id], {
        action: 'add',
        basket: session[:basket]
      })
    end

    render json: session[:basket]
  end

  # Don't bother restoring stock - will be back in 15 anyway
  def remove
    # JSON doesn't support integer keys
    id = params[:id].to_s
    session[:basket] ||= {}
    session[:basket][id] ||= 0

    if session[:basket][id] > 0
      session[:basket][id] -= 1
    end

    render json: session[:basket]
  end

  def clear
    helpers.clear_basket

    redirect_to home_index_path
  end
end
