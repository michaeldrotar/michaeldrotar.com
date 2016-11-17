if defined?(Rack) && defined?(Rack::Timeout)
  Rack::Timeout.service_timeout = 5
end
