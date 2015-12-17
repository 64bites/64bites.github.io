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
end
