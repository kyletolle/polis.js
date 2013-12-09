var app = require('http').createServer(handler);
var LISTENING_PORT = process.env.PORT || 9000;
var STATUS_CODE = 200;
var sleep = require('sleep');
var SECONDS_TO_SLEEP = 0;

app.listen(LISTENING_PORT);

handlers = {"POST": PostHandler, "GET": GetHandler};

function handler (req, res) {
  var handler = new handlers[req.method];

  handler.handle(req, res);

  sleep.sleep(SECONDS_TO_SLEEP);
  res.end();
}

function PostHandler() { }

PostHandler.prototype.handle = function(req, res) {
  res.writeHead(STATUS_CODE, {'Content-Type': 'application/json'});

  var data = '';
  req.on('data', function(chunk) {
    data += chunk;
  });

  req.on('end', function() {
    console.log('Logging POST request:');

    console.log('Headers:');
    console.log(req.headers);

    console.log('Body:');
    console.log(data.toString());
    console.log();
  });
}

function GetHandler() { }

GetHandler.prototype.handle = function(req, res) {
  res.writeHead(STATUS_CODE, {'Content-Type': 'text/html'});

  res.write("<html><head><title>Polis.js</title></head><body><h2>polis.js</h2><p>Up and Running!</p></body></html>");

  req.on('end', function() {
    console.log('Logging GET request:');

    console.log('Headers:');
    console.log(req.headers);
    console.log();
  });
}

console.log("Listening to port " + LISTENING_PORT);
console.log("Returning status code " + STATUS_CODE);
console.log();
