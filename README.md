polis.js
========

Simple Node.js HTTP listener that logs POST contents to STDOUT.

Production
----------

### Running 

Deploy to Heroku using the following steps:

- Clone this repo
- `cd polis.js`
- [Install the Heroku Toolbelt](https://toolbelt.heroku.com/)
- `heroku login`
- `heroku create`
- `git push heroku master`

For more help check out [how to get started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) on Heroku.

### Usage

Once the server is running, you can use cURL to test it out.

`curl -d 'Hello, World' <url>`

(Get the url from the `heroku create` call above, or from `heroku open`.)

You can check the logging works properly with `heroku logs`. You'll see
something like:

```
2013-09-19T19:39:52.998597+00:00 app[web.1]: Logging POST request:
2013-09-19T19:39:52.998597+00:00 app[web.1]: Headers:
2013-09-19T19:39:52.998926+00:00 app[web.1]:   'user-agent': 'curl/7.24.0 (x86_64-apple-darwin12.0) libcurl/7.24.0 OpenSSL/0.9.8x zlib/1.2.5',
2013-09-19T19:39:52.998926+00:00 app[web.1]: { 'x-request-start': '1379619592981',
2013-09-19T19:39:52.998926+00:00 app[web.1]:   'x-forwarded-proto': 'https',
2013-09-19T19:39:52.998926+00:00 app[web.1]:   'x-forwarded-for': '75.71.173.170',
2013-09-19T19:39:52.998926+00:00 app[web.1]:   host: 'polisjs.herokuapp.com',
2013-09-19T19:39:52.998926+00:00 app[web.1]:   'content-type': 'application/x-www-form-urlencoded',
2013-09-19T19:39:52.998926+00:00 app[web.1]:   'content-length': '12',
2013-09-19T19:39:52.998926+00:00 app[web.1]:   connection: 'close',
2013-09-19T19:39:52.998926+00:00 app[web.1]:   accept: '*/*' }
2013-09-19T19:39:52.998926+00:00 app[web.1]:   'x-forwarded-port': '443',
2013-09-19T19:39:52.999561+00:00 app[web.1]: Body:
2013-09-19T19:39:52.999602+00:00 app[web.1]: Hello, World
2013-09-19T19:39:52.999716+00:00 app[web.1]:
```

Development
-----------

### Requirements

- Node.js (0.10.17) - `brew install node`
- Sleep   (1.1.1)   - `npm install sleep`

### Running

`node polis.js`

A successful startup will show the following output:

```
Listening to port 9000
Returning status code 200

```

### Usage

Once the server is running, you can use cURL to test it out.

`curl -d 'Hello, World' localhost:9000`

This will result in the following output:

```
Logging POST request:
Headers:
{ 'user-agent': 'curl/7.24.0 (x86_64-apple-darwin12.0) libcurl/7.24.0 OpenSSL/0.9.8x zlib/1.2.5',
  host: 'localhost:9000',
  accept: '*/*',
  'content-length': '12',
  'content-type': 'application/x-www-form-urlencoded' }
Body:
Hello, World

```

### Quitting

Ctrl-C

Configuration
-------------

### Port

If the environment variable $PORT is set, the server will listen on that port.
Other wise, it will listen on port 9000.  To change the port the server will
listen to: `PORT=<your port number>` To change the default port, modify
`listeningPort` in the code.

### Status Code

The server currently returns a `200` HTTP status code by default. To make the
server return another status code, simply change `statusCode` in the code.

### Timeout

The server currently does not wait before responding. To make the server sleep
before it gives a response, change `secondsToSleep` in the code.  This can be
useful if testing that the calling code times out after so many seconds.

