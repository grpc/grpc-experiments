package main

import (
  "flag"
  "fmt"
  "github.com/golang/protobuf/jsonpb"
  "github.com/golang/protobuf/proto"
  "golang.org/x/net/context"
  "google.golang.org/grpc"
  "google.golang.org/grpc/channelz/grpc_channelz_v1"
  "log"
  "net/http"
  "os"
  "strings"
  "time"
)

var marshaler = jsonpb.Marshaler{EmitDefaults: true, Indent: " "}
var unmarshaler = jsonpb.Unmarshaler{}

func printHelper(w http.ResponseWriter, pb proto.Message) {
  w.WriteHeader(http.StatusOK)
  json, _ := marshaler.MarshalToString(pb)
  fmt.Fprintf(w, "%s", json)
}

func errorHelper(w http.ResponseWriter, errstr string) {
  w.WriteHeader(http.StatusInternalServerError)
  fmt.Fprintf(w, "%s", errstr)
}

func main() {
  var serverAddr = flag.String("serverAddr", "", "the target server address")
  var port = flag.Int("port", 8080, "local port")
  flag.Parse()

  fmt.Println(os.Stdout, "Address: %s", *serverAddr)
  var opts []grpc.DialOption
  opts = append(opts, grpc.WithInsecure())
  conn, err := grpc.Dial(*serverAddr, opts...)
  defer conn.Close()
  if err != nil {
    fmt.Fprintf(os.Stderr, "Failed to connect to %s\n", serverAddr)
  }
  client := grpc_channelz_v1.NewChannelzClient(conn)
  mux := http.NewServeMux()
  mux.HandleFunc("/grpcz_internal", func(w http.ResponseWriter, r *http.Request) {
    q := r.URL.Query()
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    json := strings.NewReader(q["request"][0])
    switch method := q["full_method_name"][0]; method {
      case "grpc.channelz.v1.Channelz/GetServers":
        req := grpc_channelz_v1.GetServersRequest{}
        unmarshaler.Unmarshal(json, &req)
        response, err := client.GetServers(ctx, &req)
        if err != nil {
          errorHelper(w, err.Error())
          return
        }
        printHelper(w, response)
      case "grpc.channelz.v1.Channelz/GetServerSockets":
        req := grpc_channelz_v1.GetServerSocketsRequest{}
        unmarshaler.Unmarshal(json, &req)
        response, err := client.GetServerSockets(ctx, &req)
        if err != nil {
          errorHelper(w, err.Error())
          return
        }
        printHelper(w, response)
      case "grpc.channelz.v1.Channelz/GetTopChannels":
        req := grpc_channelz_v1.GetTopChannelsRequest{}
        unmarshaler.Unmarshal(json, &req)
        response, err := client.GetTopChannels(ctx, &req)
        if err != nil {
          errorHelper(w, err.Error())
          return
        }
        printHelper(w, response)
      case "grpc.channelz.v1.Channelz/GetSubchannel":
        req := grpc_channelz_v1.GetSubchannelRequest{}
        unmarshaler.Unmarshal(json, &req)
        response, err := client.GetSubchannel(ctx, &req)
        if err != nil {
          errorHelper(w, err.Error())
          return
        }
        printHelper(w, response)
      case "grpc.channelz.v1.Channelz/GetChannel":
        req := grpc_channelz_v1.GetSubchannelRequest{}
        unmarshaler.Unmarshal(json, &req)
        response, err := client.GetSubchannel(ctx, &req)
        if err != nil {
          errorHelper(w, err.Error())
          return
        }
        printHelper(w, response)
      case "grpc.channelz.v1.Channelz/GetSocket":
        req := grpc_channelz_v1.GetSocketRequest{}
        unmarshaler.Unmarshal(json, &req)
        response, err := client.GetSocket(ctx, &req)
        if err != nil {
          errorHelper(w, err.Error())
          return
        }
        printHelper(w, response)
      default:
        errorHelper(w, "Invalid method")
      }
  })
  mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    if (strings.HasSuffix(r.URL.Path, ".css") || strings.HasSuffix(r.URL.Path, ".js")) {
      http.ServeFile(w, r, r.URL.Path[1:])
    } else {
      http.ServeFile(w, r, "dist_channelz/index.html")
    }
  })
  fmt.Printf("zpages now serving at: http://localhost:%d for %s\n", *port, *serverAddr)

  log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", *port), mux))
}
