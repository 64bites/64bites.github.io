require_relative 'price'

class Subscription
  def initialize(monthly_price_in_dollars, annual_price_in_dollars)
    @monthly_price = Price.new(monthly_price_in_dollars)
    @annual_price = Price.new(annual_price_in_dollars)
  end

  attr_reader :monthly_price, :annual_price
  
end
