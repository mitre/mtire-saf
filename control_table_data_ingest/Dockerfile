FROM ubuntu:18.04

RUN apt-get update && apt-get install -y \
  curl \
  bash \
  sudo \
  git \
  jq \
  && curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash - \
  && apt-get install -y nodejs

CMD ["/bin/bash"]
