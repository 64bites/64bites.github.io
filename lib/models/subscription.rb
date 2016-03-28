require_relative 'price'

class Subscription
  def initialize(monthly_price_in_dollars, annual_price_in_dollars, gumroad_product_id)
    @monthly_price = Price.new(monthly_price_in_dollars)
    @annual_price = Price.new(annual_price_in_dollars)
    @gumroad_product_id = gumroad_product_id
  end

  attr_reader :monthly_price, :annual_price, :gumroad_product_id
  
end
