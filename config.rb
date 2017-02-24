require "extensions/views"
require "lib/models/catalog"

activate :views
activate :directory_indexes
# Time.zone = "UTC"

#activate :imageoptim do |imageoptim| 
  #imageoptim.svgo = false
  #imageoptim.manifest = true
  #imageoptim.allow_lossy = true
#end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.prefix = "blog"

  blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  blog.sources = "articles/{id}-{title}.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "blog"
  blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "blog/tag.html"
  blog.calendar_template = "blog/calendar.html"
  blog.publish_future_dated = true
  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

page "/blog/feed.xml", layout: false

set :relative_links, true
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :layout, 'layouts/application'

set :protocol, "http://"
set :host, "64bites.com"
set :port, 80

configure :development do
 activate :livereload
end

configure :build do
  # Relative assets needed to deploy to Github Pages
  activate :relative_assets
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
  deploy.branch   = 'master'
end

CATALOG = Catalog.new(data.episodes, data.featured_episodes, data.seasons, data.subscription)

helpers do
  def nav_link(link_text, page_url, options = {})
    options[:class] ||= ""
    if current_page.url.length > 1
      current_url = current_page.url.chop
    else
      current_url = current_page.url
    end
    options[:class] << " active" if page_url == current_url
    link_to(link_text, page_url, options)
  end

  def episode_path(episode)
    "/episodes/#{episode.slug}"
  end

  def season_path(season)
    "/seasons/#{season.slug}"
  end

  def downloads_path(file)
    "/downloads/#{file}"
  end

  def episode_watch_path(episode)
    "/episodes/watch/#{episode.url_part}"
  end

  def episode_show_notes_path(episode)
    "/episodes/show-notes/#{episode.show_notes_filename}"
  end

  def render_default_drip_form
    partial("views/drip_basic_email_form")
  end

  def episodes_catalog
    CATALOG
  end
  
  def featured_episodes
    CATALOG.featured_episodes
  end
  
  def host_with_port
    [host, optional_port].compact.join(':')
  end

  def optional_port
    port unless port.to_i == 80
  end

  def article_thumbnail_url(article)
    image_url(article_thumbnail_path(article))
  end

  def article_thumbnail_path(article)
    "blog/%.3d/thumbnail.png" % article.data["id"]
  end

  def image_url(source)
    page_url("/assets/images/" + source.to_s)
  end

  def episode_url(episode)
    page_url(episode_path(episode))
  end

  def season_url(season)
    page_url(season_path(season))
  end


  def page_url(page_path)
    protocol + host_with_port + page_path
  end

end

configure :development do
  # Used for generating absolute URLs
  set :host, "64bites-test.ngrok.com" #Middleman::PreviewServer.host
  set :port, "80" #Middleman::PreviewServer.port
end


CATALOG.all_episodes.each do |episode|
  template = episode.free? ? "/views/templates/episodes/show-free.html" : "/views/templates/episodes/show-paid.html"
  proxy episode_path(episode) + ".html", template, :locals => { :episode => episode }, layout: 'episode', ignore: true
end

CATALOG.all_episodes.select(&:watchable?).each do |episode|
  template = "/views/templates/episodes/watch.html"
  puts episode.formatted_title
  puts "http://64bites.com" + episode_watch_path(episode) + "/"
  proxy episode_watch_path(episode) + ".html", template, :locals => { :episode => episode }, layout: 'no_menu', ignore: true
end

CATALOG.released_seasons.each do |season|
  proxy season_path(season) + ".html", "/views/templates/seasons/show.html", :locals => { :season => season }, layout: 'season', ignore: true
end
