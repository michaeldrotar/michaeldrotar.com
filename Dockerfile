FROM ruby:2.2.4

RUN apt-get update && apt-get install -y \
  # necessary for debian environments
  build-essential \
  nodejs

RUN mkdir /app
WORKDIR /app

COPY Gemfile* ./
RUN gem install bundler && bundle install

COPY . ./

EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
