class StockRestoreJob < ApplicationJob
  queue_as :default

  def perform(id, stock_increase = 1)
    Product.find(id).increase_stock stock_increase
  end
end
