#!/bin/bash
set -eux -o pipefail

readonly GRPC_ZPAGES_DIR="$(cd "$(dirname "$0")"/.. && pwd)"

cd $GRPC_ZPAGES_DIR/web/channelzui/
npm install
ng build --prod --build-optimizer --base-href=/dist_channelz/

rm -rf $GRPC_ZPAGES_DIR/cli/dist_channelz/
mkdir -p $GRPC_ZPAGES_DIR/cli/dist_channelz/
cp -r $GRPC_ZPAGES_DIR/web/channelzui/dist/* $GRPC_ZPAGES_DIR/cli/dist_channelz/
