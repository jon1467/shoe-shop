class Product < ApplicationRecord
  has_one_attached :image
  validates_presence_of :title, :price, :stock

  def increase_stock(stock_increase = 1)
    self.stock += stock_increase
    self.save
  end

  def decrease_stock(stock_decrease = 1)
    self.stock -= stock_decrease
    self.save
  end
end
