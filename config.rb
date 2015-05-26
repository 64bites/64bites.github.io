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
    "/episodes/#{episode.slug}.html"
  end

  def featured_episodes
    FEATURED_EPISODES
  end
end


CATALOG.all_episodes.each do |episode|
  template = "/views/templates/episodes/show-free.html"
  puts episode_path(episode)
  proxy episode_path(episode), template, :locals => { :episode => episode }
end


