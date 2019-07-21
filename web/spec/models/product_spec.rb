require 'rails_helper'

RSpec.describe Product, type: :model do
  subject { described_class.new(title: "shoe", price: 32.99) }


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
end
