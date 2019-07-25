class ProductGalleryChannel < ApplicationCable::Channel
  def subscribed
    stream_from "product_gallery"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
