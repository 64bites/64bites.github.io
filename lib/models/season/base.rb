module Season
  class Base
    def initialize(number, title, slug, price_in_dollars)
      @number, @title = number, title
      @slug = slug
      @price_in_dollars = price_in_dollars
    end

    attr_reader :number, :slug


    def formatted_price
      if price_in_dollars.to_int == price_in_dollars
        "$%.0f" % price_in_dollars
      else
        "$%.2f" % price_in_dollars
      end
    end

    def poster_path
      "seasons/#{formatted_number}.png"
    end

    def formatted_number
      "%.3d" % number
    end

    def description
      "a, b, c, d"
    end

    protected

    attr_reader :title, :price_in_dollars
  end
end
