require 'rails_helper'

# Specs in this file have access to a helper object that includes
# the ProductsHelper. For example:
#
# describe ProductsHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.describe ProductsHelper, type: :helper do
  describe "image url" do
    it "serves a default image" do
      p = Product.create(title: "no image", price: 0.0)
      expect(helper.product_image_url(p.id)).to include("http://test.host/assets/no_image")
    end
  end
end
