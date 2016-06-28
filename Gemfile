source 'https://rubygems.org'
ruby '2.2.4'

gem 'bundler', '~> 1.12.0'

gem 'rails', '~> 4.2.0'
gem 'rake', '~> 10.5.0'
gem 'puma', '~> 3.4.0'
gem 'rack-timeout', '~> 0.4.0'

gem 'sqlite3', group: [:development, :test]
gem 'pg', group: [:production]

group :development do
  gem 'guard', '~> 2.2.0', require: false
  gem 'guard-livereload', require: false
  gem 'rack-livereload'
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

gem 'rails_12factor', group: :production
