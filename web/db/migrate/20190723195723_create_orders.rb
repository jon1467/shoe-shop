class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.json :product_ids
      t.uuid :key

      t.timestamps
    end
  end
end
