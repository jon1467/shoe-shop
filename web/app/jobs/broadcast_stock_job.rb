class BroadcastStockJob < ApplicationJob
  queue_as :default

  def perform(product)
    products = ApplicationController.helpers.products_with_metadata

    ActionCable.server.broadcast(
      "products:#{product.id}",
      { action: "update", product: product }
    )
    ActionCable.server.broadcast(
      "product_gallery",
      { action: "update_gallery", products: products }
    )
  end
end
