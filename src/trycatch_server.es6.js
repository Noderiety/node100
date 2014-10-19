let http = require('http')
	, trycatch = require('trycatch').configure({'long-stack-traces':true})

http.createServer((req, res) => {
	console.log('Handling request...')
	trycatch(() => {
		setTimeout(function() {
			throw new Error('Fail.')
		}, 1000)
	}, err => {
		res.writeHead(500)
		res.end(err.stack)
	})
}).listen(8000)
