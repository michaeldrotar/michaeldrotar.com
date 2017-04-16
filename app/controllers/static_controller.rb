class StaticController < ApplicationController
  def dispatcher
    render_static(params[:section], params[:page])
  end

  def intro
    render_static(nil, 'intro')
  end

  private

  def get_layout(section, page)
    return section if layout_exists?(section)
    layout_exists?(page) ? page : 'application'
  end

  def render_static(section, page)
    path = 'static'
    path = "#{path}/#{section}" if section
    path = "#{path}/#{page}" if page
    render path, layout: get_layout(section, page)
  rescue ActionView::MissingTemplate
    raise ActionController::RoutingError, 'Not Found'
  end
end
