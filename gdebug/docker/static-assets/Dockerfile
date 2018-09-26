FROM golang:1.9
RUN mkdir /www/
COPY static_assets_server.go /www/
COPY ./dist_channelz/ /www/dist_channelz/
ENTRYPOINT go run /www/static_assets_server.go --port ${PORT}
