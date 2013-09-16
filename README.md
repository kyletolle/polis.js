polis.js
========

Simple Node.js HTTP listener that echos POST contents.

Requirements
-------

- Node.js (0.10.17) - `brew install node`
- Sleep   (1.1.1)   - `npm install sleep`

Running
-------

`node polis.js`

A successful startup will show the following output:

```
Listening to port 9000
Returning status code 200
```

Usage
-----

Once the server is running, you can use cURL to test it out.

`curl -d 'Hello, World!' localhost:9000`

This will result in the following output:

```
Received body data:
Hello, World!
```

Quitting
--------

Ctrl-C

Configuration
-------------

### Port

The server listens on port 9000 by default. To change this port number, use
`listeningPort`

### Status Code

The server currently returns a `200` HTTP status code by default. To make the
server return another status code, simply change `statusCode`.

### Timeout

The server currently does not wait before responding. To make the server sleep
before it gives a response, change `secondsToSleep`.  This can be useful if
testing that the calling code times out after so many seconds.

