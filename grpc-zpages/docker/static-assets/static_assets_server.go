package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"path"
	"strings"
)

func main() {
	var port = flag.Int("port", 8080, "local port")
	var wwwRoot = flag.String("wwwroot", "/www", "root for http files")
	flag.Parse()

	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Got request %s\n", r.URL.Path)
		localPath := path.Join(*wwwRoot, r.URL.Path[1:])
		if strings.HasSuffix(localPath, ".css") || strings.HasSuffix(localPath, ".js") {
			http.ServeFile(w, r, localPath)
		} else {
			http.ServeFile(w, r, path.Join(*wwwRoot, "dist_channelz/index.html"))
		}
	})
	fmt.Printf("Starting static assets server on port %d . Note this is not the envoy port!\n"+
		"You should not need to look at this port unless you know what you're doing.\n", *port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", *port), mux))
}
