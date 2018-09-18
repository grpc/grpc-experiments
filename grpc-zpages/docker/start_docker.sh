#!/bin/bash

set -eu -o pipefail


if [ "$#" -ne  3 ]; then
    echo "Usage: $0 localport grpcaddr grpcport"
    echo "localport: the host port to forward the envoy proxy docker"
    echo "grpcaddr, grpcport: the addr+port of the gRPC service."
    echo "  Must not be loopback addresses, to be routable from envoy Docker."
    exit 1
fi

readonly DOCKER_DIR="$(cd "$(dirname "$0")" && pwd)"


unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;TEMP=$(mktemp -p $DOCKER_DIR --suffix=.yaml);;
    Darwin*)    machine=Mac;TEMP=$(mktemp $DOCKER_DIR/temp.yaml);;
esac
# echo ${TEMP}

function finish {
  rm "$TEMP"
}
trap finish EXIT

readonly ENVOY_PORT=$1
readonly GRPC_ADDR=$2
readonly GRPC_PORT=$3
readonly ASSETS_PORT="8080"

cat > "$TEMP" <<TERMINATOR
version: '2'
services:
  front-envoy:
    build:
      context: ./envoy/
      dockerfile: Dockerfile
    ports:
      # Forward host port to docker
      - "$ENVOY_PORT:$ENVOY_PORT"
    environment:
      - GRPC_HOST=$GRPC_ADDR
      - GRPC_PORT=$GRPC_PORT
      # The docker port for envoy
      - ENVOY_PORT=$ENVOY_PORT
      # The host+port for the static assets server
      - ASSETS_HOST=127.0.0.1
      - ASSETS_PORT=$ASSETS_PORT
    mem_limit: 1000000000
    network_mode: "host"
  back-static-assets:
    build:
      context: ./static-assets/
      dockerfile: Dockerfile
    environment:
      - PORT=$ASSETS_PORT
    ports:
      # Make the port availble to linked dockers but no need
      # to forward to host machine.
      - "$ASSETS_PORT:$ASSETS_PORT"
    mem_limit: 1000000000
TERMINATOR

docker-compose  -f $TEMP up --build
