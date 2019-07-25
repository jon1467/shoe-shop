class ProductChannel < ApplicationCable::Channel
  def subscribed
    stream_from "products:#{params[:id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
