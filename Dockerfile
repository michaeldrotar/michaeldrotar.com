FROM ruby:2.2.4

RUN apt-get update && apt-get install -y \
  # necessary for debian environments
  build-essential \
  nodejs

RUN mkdir /app
WORKDIR /app

COPY . ./

ENV BUNDLE_PATH /bundle
EXPOSE 3000

CMD scripts/start
