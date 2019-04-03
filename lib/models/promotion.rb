class Promotion
  attr_reader :coupon_code, :season_price, :episode_price, :price_per_episode_in_season
  attr_reader :percent, :title, :how_long, :timezone, :deadline, :background, :color

  def initialize(promotion_data)
    @enabled = promotion_data.fetch("enabled")
    @season_price = Price.new(promotion_data.fetch("season_price_in_dollars"))
    @episode_price = Price.new(promotion_data.fetch("episode_price_in_dollars"))
    @coupon_code = promotion_data.fetch("coupon_code")
    @percent = promotion_data.fetch("percent")
    @title = promotion_data.fetch("title")
    @timezone = promotion_data.fetch("timezone")
    @deadline = promotion_data.fetch("deadline")
    @how_long = promotion_data.fetch("how_long")
    @price_per_episode_in_season = Price.new(promotion_data.fetch("price_per_episode_in_season_in_dollars"))
    @background = promotion_data.fetch("background")
    @color = promotion_data.fetch("color")
  end

  def enabled?
    @enabled
  end
end
