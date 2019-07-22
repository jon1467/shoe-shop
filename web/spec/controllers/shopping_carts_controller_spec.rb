require 'rails_helper'

RSpec.describe ShoppingCartsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #product_list" do
    it "returns http success" do
      get :product_list
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #add" do
    it "returns http success"
  end

  describe "POST #remove" do
    it "returns http success"
  end

end
