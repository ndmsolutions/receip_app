# Setup backend server
FROM python:3.7-alpine
MAINTAINER Drilon Berisha

ENV PYTHONUNBUFFERED 1

# Install dependencies
COPY ./requirements.txt /requirements.txt

# Install dependencies
COPY ./requirements.txt /requirements.txt
RUN apk add --update --no-cache postgresql-client
RUN apk add --update --no-cache --virtual .tmp-build-deps \
        gcc libc-dev linux-headers postgresql-dev
RUN pip install -r /requirements.txt
RUN apk del .tmp-build-deps

# Setup directory structure
RUN mkdir /app
WORKDIR /app

#Copy Work Dir to Docker Dir All from root working dir to app dir on docker
COPY ./ /app

RUN adduser -D user
USER user