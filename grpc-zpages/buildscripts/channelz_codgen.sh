#!/bin/bash
set -eu -o pipefail

readonly GRPC_ZPAGES_DIR="$(cd "$(dirname "$0")"/.. && pwd)"
readonly GRPC_WEB_DIR="$GRPC_ZPAGES_DIR"/buildscripts/github/grpc-web

if [[ ! -d "$GRPC_WEB_DIR" ]]; then
  mkdir -p "$GRPC_ZPAGES_DIR"/buildscripts/github
  cd "$GRPC_ZPAGES_DIR"/buildscripts/github
  git clone https://github.com/grpc/grpc-web.git
  cd "$GRPC_WEB_DIR"
  # Check out a known good SHA for reproducibility
  git checkout 6357fa78f36d2e08636612f281250b31f28ae6ec
fi

cd "$GRPC_WEB_DIR"/net/grpc/gateway/docker
docker build -t channelz_grpc_web_prereqs ./prereqs/

cd "$GRPC_ZPAGES_DIR"/docker
docker build -t channelz_codegen codegen

docker run --rm -v "$GRPC_ZPAGES_DIR"/docker/codegen/shared_dir:/shared_dir/ channelz_codegen /shared_dir/scripts/gen_channelz_pb.sh

mv "$GRPC_ZPAGES_DIR"/docker/codegen/shared_dir/gen_out/channelz.js "$GRPC_ZPAGES_DIR"/web/channelzui/src/assets/channelz.js
