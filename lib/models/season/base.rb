require_relative '../price'

module Season
  class Base
    def initialize(number, title, slug, price_in_dollars, gumroad_product_id)
      @number, @title = number, title
      @slug = slug
      @price_in_dollars = price_in_dollars
      @gumroad_product_id = gumroad_product_id
      @price = Price.new(price_in_dollars)
    end

    attr_reader :title, :number, :slug, :gumroad_product_id, :price


    def poster_path
      "seasons/#{formatted_number}.jpg"
    end

    def formatted_number
      "%.3d" % number
    end

    def description
      "a, b, c, d"
    end

    protected

    attr_reader :price_in_dollars
  end
end
