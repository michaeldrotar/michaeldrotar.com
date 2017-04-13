class PortfolioController < ApplicationController
  def index
  end

  def page
    render "portfolio/#{params[:portfolio_id]}", layout: false
  rescue ActionView::MissingTemplate
    raise ActionController::RoutingError, 'Not Found'
  end

  def show
    @title = portfolio_title(params[:id])
    raise ActionController::RoutingError, 'Not Found' unless @title
  end

  private

  def portfolio_title(id)
    case id
    when 'vra-letter'
      'VRA Letter'
    end
  end
end
