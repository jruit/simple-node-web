var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile( __dirname + '/' + 'index.html')
});

app.get('/index.html', function (req, res) {
	res.sendFile( __dirname + '/' + 'index.html')
});

app.use(function(req, res, next) {
  res.status(404).sendFile( __dirname + '/' + '404.html');
});


var server = app.listen(8098, function () {
	console.log('start')
})