# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)/assets/\w+/(.+\.(js|html|png|jpg)).*}) do |m|
    "/assets/#{m[2]}"
  end
  watch(%r{(app|vendor)/assets/\w+/(.+)\.scss}) do |m|
    "/assets/#{m[2]}.css"
  end
end
