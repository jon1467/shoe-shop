require 'rails_helper'

RSpec.describe ProductsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show" do
    it "returns http success" do
      p = Product.create(title: "get test", price: 0.0)
      get :show, params: { id: p.id }
      expect(response).to have_http_status(:success)
    end
  end

end
