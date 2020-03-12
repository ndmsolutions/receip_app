# Setup backend server
FROM ubuntu:16.04
MAINTAINER Drilon Berisha

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get dist-upgrade -y
RUN apt-get install iputils-ping dnsutils curl htop git zip nano ncdu build-essential chrpath libssl-dev libxft-dev pkg-config glib2.0-dev libexpat1-dev gobject-introspection python-gi-dev apt-transport-https libgirepository1.0-dev libtiff5-dev libjpeg-turbo8-dev libgsf-1-dev -y

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash
RUN apt-get install --yes nodejs
RUN node -v
RUN npm -v
RUN npm i -g nodemon
RUN nodemon -v

# Cleanup
RUN apt-get update && apt-get upgrade -y && apt-get autoremove -y

RUN echo "export LC_ALL=en_US.UTF-8" >> /etc/profile.d/node.sh
RUN echo "export LANG=en_US.UTF-8" >> /etc/profile.d/node.sh
RUN echo "export NODE_ENV=development" >> /etc/profile.d/node.sh
RUN more "/etc/profile.d/node.sh"

# Setup directory structure
RUN mkdir /front_end
WORKDIR /front_end

#Copy Work Dir to Docker Dir All from root working dir to app dir on docker
COPY ./ /front_end

RUN adduser --disabled-password front
RUN chown -R front:front /front_end
USER front
