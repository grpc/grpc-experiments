#!/bin/bash

# If you haven't set the GRPC_ROOT environment variable, we'll set it for you.
if [ -z ${GRPC_ROOT+x} ]; then
  GRPC_ROOT=~/github/grpc
fi

# If you haven't set the GRPC_CONFIG environment variable, we'll set it for you.
if [ -z ${GRPC_CONFIG+x} ]; then
  GRPC_CONFIG=opt
fi

# In case you didn't install GRPC, we'll let you leave it in $GRPC_ROOT.
export LD_LIBRARY_PATH=$GRPC_ROOT/libs/$GRPC_CONFIG

cd $(dirname $0)
$GRPC_ROOT/python2.7_virtual_environment/bin/python -B route_guide_server.py
