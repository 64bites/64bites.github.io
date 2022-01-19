class Globals
  attr_reader :episode_price, :season_price, :all_seasons_price

  def initialize(globals_data)
    @episode_price = Price.new(globals_data.fetch("episode_price_in_dollars"))
    @season_price = Price.new(globals_data.fetch("season_price_in_dollars"))
    @all_seasons_price = Price.new(globals_data.fetch("all_seasons_price_in_dollars"))
  end
end

