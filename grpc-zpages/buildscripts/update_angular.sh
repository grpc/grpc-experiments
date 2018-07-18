#!/bin/bash
set -eux -o pipefail

readonly GRPC_ZPAGES_DIR="$(cd "$(dirname "$0")"/.. && pwd)"

SRC_DIR="$GRPC_ZPAGES_DIR/web/channelzui/"
cd "$SRC_DIR"

rm -rf "$GRPC_ZPAGES_DIR/docker/static-assets/dist_channelz/"

if [[ $(which ng) == "" ]]; then
  echo "ng is not on the path, you must run 'npm install' in $SRC_DIR"
  exit 1
fi

ng build --prod --build-optimizer --base-href=/dist_channelz/

