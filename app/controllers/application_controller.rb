class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_locale

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  rescue I18n::InvalidLocale
    raise ActionController::RoutingError, 'Not Found'
  end

  def default_url_options(options = {})
    defaults = {
      # locale: I18n.locale
    }
    defaults.merge(options)
  end

  helper_method :current_locale
  def current_locale
    I18n.locale
  end
end
