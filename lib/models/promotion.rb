class Promotion
  attr_reader :coupon_code, :season_price, :episode_price, :price_per_episode_in_season

  def initialize(promotion_data)
    @enabled = promotion_data.fetch("enabled")
    @season_price = Price.new(promotion_data.fetch("season_price_in_dollars"))
    @episode_price = Price.new(promotion_data.fetch("episode_price_in_dollars"))
    @coupon_code = promotion_data.fetch("coupon_code")
    @price_per_episode_in_season = Price.new(promotion_data.fetch("price_per_episode_in_season_in_dollars"))
  end

  def enabled?
    @enabled
  end
end
