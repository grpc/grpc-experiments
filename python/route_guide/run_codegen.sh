#!/bin/bash

# If you haven't set the GRPC_ROOT environment variable, we'll set it for you.
if [ -z ${GRPC_ROOT+x} ]; then
  GRPC_ROOT=~/github/grpc
fi

# If you haven't set the GRPC_CONFIG environment variable, we'll set it for you.
if [ -z ${GRPC_CONFIG+x} ]; then
  GRPC_CONFIG=opt
fi

which grpc_python_plugin 2>&1 /dev/null
if [ $? -eq 0 ]; then
  # If you've already installed the GRPC Python plugin, we'll use it.
  GRPC_PYTHON_PLUGIN=`which grpc_python_plugin`
else
  # otherwise we'll use the one in $GRPC_ROOT.
  GRPC_PYTHON_PLUGIN="$GRPC_ROOT/bins/$GRPC_CONFIG/grpc_python_plugin"
fi

cd $(dirname $0)

# Runs the protoc with GRPC plugin to generate protocol messages and GRPC stubs.
protoc -I . --python_out=. --grpc_out=. --plugin=protoc-gen-grpc=$GRPC_PYTHON_PLUGIN ../../protos/route_guide.proto
