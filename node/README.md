gRPC in 3 minutes (Node.js)
===========================

BACKGROUND
-------------
For this sample, we've already generated the server and client stubs from [helloworld.proto](https://github.com/grpc/grpc-common/blob/master/protos/helloworld.proto). 

PREREQUISITES
-------------

This requires Node 10.x or greater. 

INSTALL
-------

 - Clone this repository
 
   ```sh
   $ git clone https://github.com/grpc/grpc-common.git
   ```
// TODO: Replace make/install of GRPC with a package get command as soon as packages are available [issue](https://github.com/grpc/grpc-common/issues/80) 
 - Follow the instructions in [INSTALL](https://github.com/grpc/grpc/blob/master/INSTALL) to install the gRPC C core.
 
 - Install the node package

   ```sh
   $ cd grpc-common/node
   $ npm install 
   # If that command fails, you'll need to clone the grpc repository (if you haven't already)
   $ git clone https://github.com/grpc/grpc.git
   $ npm install ~/grpc/src/node
   ```
 

Try it! 
-------

 - Run the server

   ```sh
   $ # from ~/grpc-common/node
   $ nodejs ./greeter_server.js &
   ```

 - Run the client

   ```sh
   $ nodejs ./greeter_client.js
   ```

Note
----

This directory has a copy of `helloworld.proto` because it currently depends on
some Protocol Buffer 2.0 syntax that is deprecated in Protocol Buffer 3.0.
