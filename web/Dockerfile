FROM ruby:2-alpine

RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories \
  && apk update \
  && apk add --update-cache postgresql-client nodejs yarn \
    bash libffi-dev readline build-base postgresql-dev tzdata \
    libc-dev linux-headers libxml2-dev libxslt-dev readline-dev gcc libc-dev \
  && rm -rf /var/cache/apk/*

ARG RAILS_ENV
ENV RAILS_ENV $RAILS_ENV

RUN mkdir /shoe-shop
WORKDIR /shoe-shop
COPY . /shoe-shop
RUN if [ "${RAILS_ENV}" != "development" ]; then bundle install --without development; else bundle install; fi
RUN yarn install

# Only precompile assets when not in development mode.
RUN if [ "${RAILS_ENV}" != "development" ]; then rails assets:precompile; fi

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
