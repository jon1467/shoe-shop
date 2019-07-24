require 'securerandom'

module BasketsHelper
  def basket_id
    if cookies.signed[:basket_id].nil?
      cookies.signed[:basket_id] = SecureRandom.uuid
    end
    cookies.signed[:basket_id]
  end

  def clear_basket
    session[:basket] = {}
  end
end
