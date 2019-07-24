require 'rails_helper'

RSpec.describe Product, type: :model do
  subject { described_class.new(title: "shoe", price: 32.99, stock: 5) }

  it "can increase stock by 1" do
    subject.increase_stock
    expect(subject.stock).to eq(6)
  end

  it "can increase stock by n" do
    subject.increase_stock 3
    expect(subject.stock).to eq(8)
  end

  it "can decrease stock by n" do
    subject.decrease_stock 3
    expect(subject.stock).to eq(2)
  end

  it "can decrease stock by 1" do
    subject.decrease_stock
    expect(subject.stock).to eq(4)
  end

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a title" do
    subject.title = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a price" do
    subject.price = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a stock value" do
    subject.stock = nil
    expect(subject).to_not be_valid
  end
end
