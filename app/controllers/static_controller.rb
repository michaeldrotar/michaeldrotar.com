class StaticController < ApplicationController
  def dispatcher
    section = params[:section]
    page = params[:page] || 'index'
    layout = layout_exists?(section) ? section : 'application'
    path = 'static'
    path = "#{path}/#{section}" if section
    path = "#{path}/#{page}" if page
    render path, layout: layout
  rescue ActionView::MissingTemplate
    raise ActionController::RoutingError, 'Not Found'
  end
end
