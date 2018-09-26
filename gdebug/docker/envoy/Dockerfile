FROM envoyproxy/envoy:v1.7.0
RUN mkdir /tmp/envoy/
RUN mkdir /zprox/
COPY ./zprox.sh /zprox/
ENTRYPOINT /zprox/zprox.sh ${ENVOY_PORT} ${GRPC_HOST} ${GRPC_PORT} ${ASSETS_HOST} ${ASSETS_PORT}
