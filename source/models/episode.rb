class Episode
  attr_reader :number, :title, :publication_time, :wistia_id, :description
  def initialize(number, title, is_free, is_published, publication_time, wistia_id, description)
    @number, @title, @is_free, @is_published, @publication_time, @wistia_id, @description = number, title, is_free, is_published, publication_time, wistia_id, description
  end

  def free?
    @is_free
  end
  
  def published?
    @is_published
  end

  def slug
    "#{formatted_number}-#{title_slug}"
  end

  def poster_path
    "episodes/#{formatted_number}.png"
  end

  def formatted_number
    "%.3d" % number
  end

  def formatted_title
    "##{formatted_number} - #{title}"
  end

  def title_slug
    # strip the string
    ret = title.strip.downcase

    #blow away apostrophes
    ret.gsub! /['`]/, ""

    # @ --> at, and & --> and
    ret.gsub! /\s*@\s*/, " at "
    ret.gsub! /\s*&\s*/, " and "

    # replace all non alphanumeric, periods with dash
    ret.gsub! /\s*[^A-Za-z0-9\.]\s*/, '-'

    # replace underscore with dash
    ret.gsub! /[-_]{2,}/, '-'

    # convert double dashes to single
    ret.gsub! /-+/, "-"

    # strip off leading/trailing dash
    ret.gsub! /\A[-\.]+|[-\.]+\z/, ""

    ret
  end
end
