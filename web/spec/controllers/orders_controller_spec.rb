require 'rails_helper'

RSpec.describe OrdersController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #show" do
    it "returns http success"
  end

  describe "GET #create" do
    it "returns http success"
  end

end
