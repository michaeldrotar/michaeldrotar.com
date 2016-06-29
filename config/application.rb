require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MichaelDrotarCom
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over these.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record
    # auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names.
    # Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    locales_path = Rails.root.join('config', 'locales', '**', '*.{rb,yml}')
    config.i18n.load_path += Dir[locales_path]
    config.i18n.default_locale = 'en'
    config.i18n.enforce_available_locales = true
    config.i18n.fallbacks = {
      'en-GB' => 'en',
      'en-US' => 'en',
      'es' => 'en',
      'es-CO' => 'es',
      'es-ES' => 'es',
      'es-MX' => 'es',
      'fr' => 'en',
      'fr-CA' => 'fr',
      'fr-FR' => 'fr'
    }
    available_locales = config.i18n.fallbacks.map do |locale, _|
      locale
    end
    available_locales << config.i18n.default_locale
    config.i18n.available_locales = available_locales
  end
end
