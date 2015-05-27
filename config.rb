require "extensions/views"
require "source/models/catalog"

activate :views
activate :directory_indexes

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
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
  deploy.branch   = 'master'
end

CATALOG = Catalog.new
FEATURED_EPISODES = CATALOG.free_episodes.select do |episode|
  [2].include? episode.number
end


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

  def featured_episodes
    FEATURED_EPISODES
  end
  def host_with_port
    [host, optional_port].compact.join(':')
  end

  def optional_port
    port unless port.to_i == 80
  end

  def image_url(source)
    page_url(image_path(source))
  end

  def episode_url(episode)
    page_url(episode_path(episode))
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
  template = "/views/templates/episodes/show-free.html"
  puts episode_path(episode)
  proxy episode_path(episode) + ".html", template, :locals => { :episode => episode }, layout: 'episode'
end


