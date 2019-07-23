class BasketsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "baskets:#{params[:id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
