class HomeController < ApplicationController
  def index
    @products = helpers.products_with_metadata
  end
end
