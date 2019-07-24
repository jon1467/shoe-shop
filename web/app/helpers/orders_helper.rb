module OrdersHelper
  def total(product_list)
    total_price = 0.0
    product_list.each do |id, item|
      total_price += item["product"]["price"].to_f
    end
    total_price
  end
end
