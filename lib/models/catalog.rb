require_relative 'episode'

class Catalog

  def initialize(episodes_data)
    @episodes_data = episodes_data
  end

  def free_episodes
    all_episodes.select(&:free?)
  end

  def all_episodes
    episodes_data.map do |episode_slug, episode_data|
      puts "BEKON"
      p episode_slug
      p episode_data
      episode = Episode.new(
        decode_number(episode_slug),
        episode_data["title"],
        episode_data["is_free"],
        episode_data["is_published"],
        episode_data["publication_time"],
        episode_data["wistia_id"],
        episode_data["description"],
        episode_slug
      )
      p episode
      episode
    end
  end

  private
  attr_reader :episodes_data
  
  def decode_number(episode_slug)
    episode_slug.split("-").first.to_i 
  end
end
