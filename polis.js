var app = require('http').createServer(handler);
var LISTENING_PORT = process.env.PORT || 9000;
var STATUS_CODE = 200;
var sleep = require('sleep');
var SECONDS_TO_SLEEP = 0;

app.listen(LISTENING_PORT);

function handler (req, res) {
  var data = '';

  if (req.method == "POST") {
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

  res.writeHead(STATUS_CODE, {'Content-Type': 'text/plain'});
  sleep.sleep(SECONDS_TO_SLEEP);
  res.end();
}

console.log("Listening to port " + LISTENING_PORT);
console.log("Returning status code " + STATUS_CODE);
console.log();
