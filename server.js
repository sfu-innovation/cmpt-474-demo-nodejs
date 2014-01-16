
var http = require('http')
	express = require('express'),
	redis = require('redis'),
	app = express();


app.get('/', function(req, res) {
	res.send(200, 'Hello world');
});

http.createServer(app).listen(9996);