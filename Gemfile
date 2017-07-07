source 'https://rubygems.org'
ruby '2.4.1'

# Server
gem 'puma', '~> 3.7'
gem 'rack-timeout', '~> 0.4.0', group: [:production]
gem 'rails', '~> 5.1.1'
gem 'rails_12factor', group: [:production]
gem 'rake', '~> 10.5.0'

# Env
gem 'figaro', '~> 1.1.0'

# Database
gem 'friendly_id', '~> 5.2.0'
# gem 'globalize', '~> 5.0.1' # 5.0.1 requires active record < 4.3, does not work with rails 5
gem 'pg' # Postgres

# Authentication
gem 'devise', '~> 4.3.0'
gem 'omniauth', '~> 1.3.0'
gem 'omniauth-facebook', '~> 3.0.0'
gem 'omniauth-google-oauth2', '~> 0.4.0'

group :development do
  # Error handling
  gem 'better_errors'
  gem 'binding_of_caller' # adds features to better_errors

  # Linting
  gem 'rubocop', require: false
  gem 'scss_lint', require: false
end

group :development, :test do
  # Debugging
  gem 'byebug'
end

# Frontend
gem 'autoprefixer-rails'
gem 'normalize-rails'
gem 'sass-rails'
gem 'uglifier'

# Bower Assets
source 'http://insecure.rails-assets.org' do
  gem 'rails-assets-jquery'
end
