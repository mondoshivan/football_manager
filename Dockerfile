FROM ruby:2.4.6

RUN apt-get update -y
RUN apt-get install -y curl software-properties-common
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN mkdir -p /var/log/football_manager

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN ./initialize.sh

RUN bundle install --gemfile server/Gemfile

EXPOSE 9191

CMD ["/bin/bash", "./server/start_server.sh", "9191", "production", "config/config.yml"]