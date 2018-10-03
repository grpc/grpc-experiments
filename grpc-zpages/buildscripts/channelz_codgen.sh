#!/bin/bash
set -eu -o pipefail

if [ "$#" -gt  1 ]; then
    echo "Usage: $0 [GRPC_PROTO_REPO_SHA]"
    echo "GRPC_PROTO_SHA defaults to 'origin/master'"
fi

# Check out a known good SHA for reproducibility
readonly GRPC_WEB_SHA=6357fa78f36d2e08636612f281250b31f28ae6ec
readonly GRPC_PROTO_SHA="${1:-origin/master}"

readonly GRPC_ZPAGES_DIR="$(cd "$(dirname "$0")"/.. && pwd)"
readonly GITHUB_DIR="$GRPC_ZPAGES_DIR"/buildscripts/github/

if [[ ! -d "$GITHUB_DIR"/grpc-web ]]; then
  mkdir -p "$GITHUB_DIR"
  cd "$GITHUB_DIR"
  git clone https://github.com/grpc/grpc-web.git
fi
cd "$GITHUB_DIR"/grpc-web/
git checkout "$GRPC_WEB_SHA"

cd "$GITHUB_DIR"/grpc-web//net/grpc/gateway/docker
docker build -t channelz_grpc_web_prereqs ./prereqs/

cd "$GRPC_ZPAGES_DIR"/docker
docker build -t channelz_codegen codegen

docker run --rm -v "$GRPC_ZPAGES_DIR"/docker/codegen/shared_dir:/shared_dir/ channelz_codegen bash -c "function fixFiles() { chown -R $(id -u):$(id -g) /shared_dir; }; trap fixFiles EXIT; /shared_dir/scripts/gen_channelz_pb.sh $GRPC_PROTO_SHA"

mv "$GRPC_ZPAGES_DIR"/docker/codegen/shared_dir/gen_out/channelz.js "$GRPC_ZPAGES_DIR"/web/channelzui/src/generated/channelz.js
