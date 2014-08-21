var http = require('http');

var app = http.createServer();

app.on('request', function(req, res) {
	setTimeout(function() {
		res.end('hello world\n');
	}, 10000);
});

app.listen(8000);
