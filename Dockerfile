FROM ruby:2.4.1

RUN apt-get update && apt-get install -y \
  # necessary for debian environments
  build-essential \
  nodejs

RUN mkdir /app
WORKDIR /app

COPY . ./
RUN gem install bundler

ENV BUNDLE_PATH /bundle
EXPOSE 3000

CMD scripts/start
