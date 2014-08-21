var http = require('http');

var app = http.createServer();

app.on('request', function(req, res) {
	setTimeout(function() {
		res.end('hello world\n');
	}, 1000);
});
app.listen(8000);

console.log('Server started on port 8000');