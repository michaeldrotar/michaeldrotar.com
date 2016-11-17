source 'https://rubygems.org'
ruby '2.2.4'

gem 'rails', '~> 4.2.0'
gem 'rake', '~> 10.5.0'
gem 'puma', '~> 3.4.0'
gem 'rack-timeout', '~> 0.4.0', group: :production
gem 'figaro', '~> 1.1.0'

gem 'pg'
gem 'globalize', '~> 5.0.0'

gem 'devise', '~> 4.1.0'
gem 'omniauth', '~> 1.3.0'
gem 'omniauth-facebook', '~> 3.0.0'
gem 'omniauth-google-oauth2', '~> 0.4.0'

group :development do
  gem 'binding_of_caller' # adds REPL, variable inspection, and pretty stack frames to better_errors
  gem 'better_errors'
  gem 'guard', '~> 2.2.0', require: false
  gem 'guard-livereload', require: false
  gem 'rack-livereload'
end

group :development, :test do
  gem 'byebug'
end

gem 'jbuilder'
gem 'spring', group: [:development]

gem 'autoprefixer-rails'
gem 'sass-rails'
gem 'turbolinks'
gem 'uglifier'

source 'http://insecure.rails-assets.org' do
  gem 'rails-assets-jquery', '~> 3.0.0'
  gem 'rails-assets-normalize-css', '~> 4.1.0'
end

gem 'rubocop', require: false, group: [:development]
gem 'scss_lint', require: false, group: [:development]

gem 'tzinfo', platforms: [:mswin, :mingw]
gem 'tzinfo-data', platforms: [:mswin, :mingw]
gem 'wdm', platforms: [:mswin, :mingw]

gem 'rails_12factor', group: [:production]
