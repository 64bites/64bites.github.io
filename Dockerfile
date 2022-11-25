# docker run -it --platform linux/amd64 -p 4567:4567 -v $(pwd):/tmp -w /tmp middleman /bin/bash

FROM makevoid/ruby-2.3

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle

COPY . .