class ShoppingCartsController < ApplicationController
  def index
    session[:cart] ||= {}
    render json: session[:cart]
  end

  def product_list
    @product_list = {}
    session[:cart] ||= {}
    session[:cart].each do |product_id, quantity|
      @product_list[product_id] = {
        quantity: quantity,
        product: Product.find(product_id)
      }
    end
    render json: @product_list
  end

  def add
    # JSON doesn't support integer keys
    id = params[:id].to_s
    session[:cart] ||= {}
    session[:cart][id] ||= 0
    session[:cart][id] += 1

    render json: session[:cart]
  end

  def remove
    # JSON doesn't support integer keys
    id = params[:id].to_s
    session[:cart] ||= {}
    session[:cart][id] ||= 0

    if session[:cart][id] > 0
      session[:cart][id] -= 1
    end

    render json: session[:cart]
  end
end
