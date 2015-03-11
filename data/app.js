var express = require('express');

var PORT = process.env.PORT || 8000;

var app = express();
app.get('/', function( req, res) {
  var msg = {content : 'Hello World'};
  res.send(msg);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
