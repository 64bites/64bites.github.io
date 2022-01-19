require_relative './price'

class AllSeasons
    def initialize(price_in_dollars, gumroad_product_id)
      @price_in_dollars = price_in_dollars
      @gumroad_product_id = gumroad_product_id
      @price = Price.new(price_in_dollars)
    end

    attr_reader :gumroad_product_id, :price

    def poster_path
      "all_seasons.jpg"
    end

    protected

    attr_reader :price_in_dollars
  end
