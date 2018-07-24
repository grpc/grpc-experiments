#!/bin/bash
set -eu -o pipefail

# Check out a known good SHA for reproducibility
readonly GRPC_WEB_SHA=6357fa78f36d2e08636612f281250b31f28ae6ec

readonly GRPC_ZPAGES_DIR="$(cd "$(dirname "$0")"/.. && pwd)"
readonly GITHUB_DIR="$GRPC_ZPAGES_DIR"/buildscripts/github/

if [[ ! -d "$GITHUB_DIR"/grpc-web ]]; then
  mkdir -p "$GITHUB_DIR"
  cd "$GITHUB_DIR"
  git clone https://github.com/grpc/grpc-web.git
  cd grpc-web/
  git checkout "$GRPC_WEB_SHA"
fi

cd "$GITHUB_DIR"/grpc-web//net/grpc/gateway/docker
docker build -t channelz_grpc_web_prereqs ./prereqs/

cd "$GRPC_ZPAGES_DIR"/docker
docker build -t channelz_codegen codegen

exec docker run --rm -v "$GRPC_ZPAGES_DIR"/docker/codegen/shared_dir:/shared_dir/ channelz_codegen bash -c "function fixFiles() { chown -R $(id -u):$(id -g) /shared_dir; }; trap fixFiles EXIT; /shared_dir/scripts/gen_channelz_pb.sh"

mv "$GRPC_ZPAGES_DIR"/docker/codegen/shared_dir/gen_out/channelz.js "$GRPC_ZPAGES_DIR"/web/channelzui/src/generated/channelz.js
