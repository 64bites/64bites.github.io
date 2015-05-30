require_relative 'episode'

class Catalog

  def initialize(episodes_data, featured_episodes_data)
    @episodes_data = episodes_data
    @featured_episodes_data = featured_episodes_data
  end

  def free_episodes
    all_episodes.select(&:free?)
  end

  def featured_episodes
    free_episodes.select do |episode|
      featured_episodes_data.include? episode.number
    end
  end 

  def all_episodes
    episodes_data.map do |episode_slug, episode_data|
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
      episode
    end
  end

  private
  attr_reader :episodes_data, :featured_episodes_data
  
  def decode_number(episode_slug)
    episode_slug.split("-").first.to_i 
  end
end
