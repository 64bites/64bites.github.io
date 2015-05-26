require_relative 'episode'

class Catalog
  def free_episodes
    all_episodes.select(&:free?)
  end

  def all_episodes
    [ #number, title,            is_free, is_published, publication_time, wistia_id,    description
      [2,      "BASIC's Basics", true,    false,        nil,              "a372l7yjjb", "In which we'll learn how to execute BASIC commands. We will define and use variables, convert between different types and display them on the screen. Along the way we will find out why floats in BASIC are faster than integers. And finally, we'll discover obscure uses of the PRINT command."],
    ].map do |args|
      Episode.new(*args)
    end
  end
end
