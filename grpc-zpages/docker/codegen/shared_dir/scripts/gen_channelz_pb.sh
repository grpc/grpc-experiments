#!/bin/bash
set -eu -o pipefail

if [ "$#" -ne  1 ]; then
    echo "Usage: $0 GRPC_PROTO_REPO_SHA"
fi

readonly GRPC_PROTO_SHA="$1"
readonly SHARED_DIR="$(cd "$(dirname "$0")"/.. && pwd)"

mkdir -p /github
cd /github/
git clone https://github.com/grpc/grpc-proto.git
cd /github/grpc-proto
git checkout "$GRPC_PROTO_SHA"

readonly WORKSPACE="/workspace"
mkdir -p "$WORKSPACE"

# Run protoc and generate .js for msg types
protoc -I=/github/grpc-proto/grpc/channelz/v1/ --js_out=import_style=closure,binary:"$WORKSPACE" channelz.proto
protoc -I=/github/grpc-web/third_party/grpc/third_party/protobuf/src/ --js_out=import_style=closure,binary:"$WORKSPACE" google/protobuf/any.proto google/protobuf/duration.proto google/protobuf/timestamp.proto google/protobuf/wrappers.proto

# Run protoc with grpc-web plugin to generate client
protoc -I=/github/grpc-proto/grpc/channelz/v1/ --plugin=protoc-gen-grpc-web=/github/grpc-web/javascript/net/grpc/web/protoc-gen-grpc-web  --grpc-web_out=out=channelz.grpc.pb.js,mode=grpcweb:"$WORKSPACE" channelz.proto

# Run closure compiler to produce a self contained .js file 
mkdir -p "$SHARED_DIR"/gen_out/
java \
  -jar /github/grpc-web/closure-compiler.jar \
  --js "$WORKSPACE" \
  --js /github/grpc-web/javascript \
  --js /github/grpc-web/net \
  --js /github/grpc-web/third_party/closure-library \
  --js /github/grpc-web/third_party/grpc/third_party/protobuf/js \
  --entry_point=goog:proto.grpc.channelz.v1.ChannelzClient \
  --entry_point=goog:proto.grpc.channelz.v1.SocketOptionTimeout \
  --entry_point=goog:proto.grpc.channelz.v1.SocketOptionLinger \
  --entry_point=goog:proto.grpc.channelz.v1.SocketOptionTcpInfo \
  --dependency_mode=STRICT \
  --js_output_file "$SHARED_DIR"/gen_out/channelz.js
