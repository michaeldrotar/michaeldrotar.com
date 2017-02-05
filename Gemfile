source 'https://rubygems.org'
ruby '2.2.4'

# Server
gem 'puma', '~> 3.4.0'
gem 'rack-timeout', '~> 0.4.0', group: [:production]
gem 'rails', '~> 4.2.0'
gem 'rails_12factor', group: [:production]
gem 'rake', '~> 10.5.0'

# Env
gem 'figaro', '~> 1.1.0'

# Database
gem 'globalize', '~> 5.0.0'
gem 'pg' # Postgres

# Authentication
gem 'devise', '~> 4.1.0'
gem 'omniauth', '~> 1.3.0'
gem 'omniauth-facebook', '~> 3.0.0'
gem 'omniauth-google-oauth2', '~> 0.4.0'

group :development do
  # Error handling
  gem 'better_errors'
  gem 'binding_of_caller' # adds features to better_errors

  # Auto processing
  gem 'guard', '~> 2.2.0', require: false
  gem 'guard-livereload', require: false
  gem 'rack-livereload', require: false
end

group :development, :test do
  # Debugging
  gem 'byebug'
end

# Frontend
gem 'autoprefixer-rails'
gem 'bootstrap', '~> 4.0.0.alpha6'
gem 'sass-rails'
gem 'turbolinks'
gem 'uglifier'

# Bower Assets
source 'http://insecure.rails-assets.org' do
  gem 'rails-assets-jquery', '~> 3.0.0'
  gem 'rails-assets-tether', '>= 1.3.3'
end

# Linting
gem 'rubocop', require: false, group: [:development]
gem 'scss_lint', require: false, group: [:development]
