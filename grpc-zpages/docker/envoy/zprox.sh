#!/bin/bash

set -exu -o pipefail

if [ "$#" -ne  5 ]; then
    echo "Usage: ./zprox localport grpcaddr grpcport assetsaddr assetsport"
    echo "localport: the port envoy proxy should listen"
    echo "grpcaddr, grpcport: the addr+port of the gRPC service"
    echo "assetsaddr, assetsport: the ip+port of the web server serving zpages assets (html, js, etc)"
    exit 1
fi


TEMP=$(mktemp --suffix=.yaml)
function finish {
  rm "$TEMP"
}
trap finish EXIT

readonly LOCAL_PORT=$1
readonly GRPC_ADDR=$2
readonly GRPC_PORT=$3
readonly ASSETS_ADDR=$4
readonly ASSETS_PORT=$5

cat > "$TEMP" <<TERMINATOR
static_resources:
  listeners:
  - name: my_listener
    address:
      socket_address:
        address: 0.0.0.0
        port_value: $LOCAL_PORT
    filter_chains:
    - filters:
      - name: envoy.http_connection_manager
        config:
          codec_type: auto
          stat_prefix: ingress_http
          route_config:
            name: local_route
            virtual_hosts:
            - name: local_service
              domains:
                - "*"
              routes:
              - match:
                  prefix: "/"
                  headers:
                   - name: "Content-Type"
                     prefix_match: "application/grpc-web"
                route:
                  cluster: local_service_grpc
              - match:
                  prefix: "/"
                route:
                  cluster: local_service_web
          http_filters:
          - name: envoy.grpc_web
            config: {}
          - name: envoy.router
          access_log:
            name: envoy.file_access_log
            config:
              path: "/dev/stdout"
  clusters:
  - name: local_service_grpc
    connect_timeout: 0.250s
    type: strict_dns
    lb_policy: round_robin
    http2_protocol_options: {}
    hosts:
    - socket_address:
        address: $GRPC_ADDR
        port_value: $GRPC_PORT
  - name: local_service_web
    connect_timeout: 0.250s
    type: strict_dns
    lb_policy: round_robin
    hosts:
    - socket_address:
        address: $ASSETS_ADDR
        port_value: $ASSETS_PORT
admin:
  access_log_path: "/tmp/envoy/admin_access.log"
  address:
    socket_address:
      address: 0.0.0.0
      port_value: 9901
TERMINATOR



/usr/local/bin/envoy --v2-config-only -c "$TEMP"
