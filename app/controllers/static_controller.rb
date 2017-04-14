class StaticController < ApplicationController
  def dispatcher
    section = params[:section]
    page = params[:page] || 'index'
    layout = layout_exists?(section) ? section : 'application'
    render "static/#{params[:section]}/#{page}", layout: layout
  rescue ActionView::MissingTemplate
    raise ActionController::RoutingError, 'Not Found'
  end
end
