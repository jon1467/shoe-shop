class BroadcastBasketJob < ApplicationJob
  queue_as :default

  def perform(id, payload)
    ActionCable.server.broadcast("baskets:#{id}", payload)
  end
end
