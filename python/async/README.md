# Asynchronous gRPC Python

We intend to support use of gRPC Python in use cases involving asynchronous frameworks, libraries, and language features.

## Requirements

* Straightforward, attractive, idiomatic developer-user story for using gRPC Python with [the `async`/`await` syntax introduced in Python 3.5](https://docs.python.org/3/whatsnew/3.5.html#pep-492-coroutines-with-async-and-await-syntax).
* Straightforward, attractive, idiomatic developer-user story for using gRPC Python with [the `asyncio` module introduced in Python 3.4](https://docs.python.org/3/whatsnew/3.4.html#asyncio) or a confident answer about why gRPC Python and `asyncio` needn't be used together or do not conflict.
* A not-too-painful developer-user story for using gRPC Python in 2.7-and-3.4+ with popular third-party asynchronous frameworks and libraries including
  * [`gevent`](http://www.gevent.org)
  * [`tornado`](http://www.tornadoweb.org/en/stable/)
  * More?
* Unit test coverage of all supported behaviors introduced to gRPC Python.

## Example application code

When using gRPC Python with Python 3.5+, invoking fifty concurrent RPCs should look like
```
# Well, what?
```

When using gRPC Python with Python 2.7 and `gevent`, invoking an RPC should look like
```
# Well?
```
