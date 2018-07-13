#!/bin/bash
set -eux -o pipefail

readonly GRPC_ZPAGES_DIR="$(cd "$(dirname "$0")"/.. && pwd)"

cd "$GRPC_ZPAGES_DIR/web/channelzui/"
npm install

rm -rf "$GRPC_ZPAGES_DIR/docker/static-assets/dist_channelz/"
ng build --prod --build-optimizer --base-href=/dist_channelz/

