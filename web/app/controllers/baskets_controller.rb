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
    # JSON doesn't support integer keys
    id = params[:id].to_s
    session[:basket] ||= {}
    session[:basket][id] ||= 0
    session[:basket][id] += 1

    BasketsChannel.broadcast_to(params[:basket_id], {
      action: 'add',
      basket: session[:basket]
    })

    render json: session[:basket]
  end

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
