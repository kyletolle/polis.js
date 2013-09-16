var app = require('http').createServer(handler);
var listeningPort = 9000;
var statusCode = 200;
var sleep = require('sleep');
var secondsToSleep = 0;

app.listen(listeningPort);

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

  res.writeHead(statusCode, {'Content-Type': 'text/plain'});
  sleep.sleep(secondsToSleep);
  res.end();
}

console.log("Listening to port " + listeningPort);
console.log("Returning status code " + statusCode);
console.log();
