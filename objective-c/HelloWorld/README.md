#gRPC in 3 minutes (Objective-C)

## Installation

To run this example you should have [Cocoapods](https://cocoapods.org/#install) installed, as well as the relevant tools to generate the client library code (and a server in another language, for testing). You can obtain the latter by following [these setup instructions](https://github.com/grpc/homebrew-grpc).

## Hello Objective-C gRPC!

Here's how to build and run the Objective-C implementation of the [Hello World](https://github.com/grpc/grpc-common/blob/master/protos/helloworld.proto) example used in [Getting started](https://github.com/grpc/grpc-common).

The example code for this and our other examples lives in the `grpc-common`
GitHub repository. Clone this repository to your local machine by running the
following command:


```sh
$ git clone https://github.com/grpc/grpc-common.git
```

Change your current directory to `grpc-common/objective-c/HelloWorld`

```sh
$ cd grpc-common/objective-c/HelloWorld
```

### Try it!
To try the sample app, we need a gRPC server running locally. Let's compile and run, for example, the C++ server in this repository:

```shell
$ pushd ../../cpp/helloworld
$ make
$ ./greeter_server &
$ popd
```

Now have Cocoapods generate and install the client library for our .proto files:

```shell
$ pod install
```

This might have to compile OpenSSL, which takes around 15 minutes if Cocoapods doesn't have it yet on your computer's cache).

Finally, open the XCode workspace created by Cocoapods, and run the app. You can check the calling code in `Supporting Files/main.m` and see the results in XCode's log console.

The code sends a `HLWHelloRequest` containing the string "Objective-C" to a local server. The server responds with a `HLWHelloResponse`, which contains a string that is then output to the log.

## Tutorial

You can find a more detailed tutorial in [gRPC Basics: Objective-C](https://github.com/grpc/grpc-common/blob/master/objective-c/route_guide/README.md)