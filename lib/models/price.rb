class Price
  def initialize(price_in_dollars)
    @price_in_dollars = price_in_dollars
  end

  def formatted
    if @price_in_dollars.to_int == @price_in_dollars
      "$%.0f" % @price_in_dollars
    else
      "$%.2f" % @price_in_dollars
    end
  end

  def in_dollars
    @price_in_dollars
  end

  def discount_by(discount_percent)
    factor = (100 - discount_percent) / 100.0
    multiply_by(factor)
  end

  def multiply_by(factor)
    Price.new(@price_in_dollars * factor)
  end

  def divide_by(factor)
    Price.new(@price_in_dollars / factor)
  end

  def add(price)
    Price.new(@price_in_dollars + price.in_dollars)
  end
end
