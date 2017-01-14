class Episode
  attr_reader :number, :title, :publication_time, :wistia_id, :description, :slug
  def initialize(episode_data, number, slug)
    @number = number
    @title = episode_data.fetch("title")
    @is_free = episode_data.fetch("free")
    @gumroad_product_id = episode_data.fetch("gumroad_product_id")
    @price = Price.new(episode_data.fetch("price"))
    @is_published = episode_data.fetch("is_published")
    @publication_time = episode_data.fetch("publication_time")
    @wistia_id = episode_data.fetch("wistia_id")
    @description = episode_data.fetch("description")
    @slug = slug
    @poster_ext = episode_data.fetch("poster_ext", "png")
    @episode_data = episode_data
  end

  def free?
    @is_free
  end

  def watchable?
    @wistia_id.present? && @episode_data.has_key?("url_part")
  end

  def url_part
    @episode_data.fetch("url_part")
  end
  
  def show_notes_filename
    slug+ "-show-notes.zip"
  end

  def published?
    @is_published
  end

  def poster_path
    "episodes/#{formatted_number}.#{poster_ext}"
  end

  def formatted_number
    "%.3d" % number
  end

  def formatted_title
    "##{formatted_number} - #{title}"
  end

  attr_reader :price, :gumroad_product_id, :poster_ext
  
  private

  def build_slug
    "#{formatted_number}-#{title_slug}"
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

