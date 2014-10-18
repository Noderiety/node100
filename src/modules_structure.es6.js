// Require
// Core modules
let http = require('http')
	, fs = require('fs')
// Packages
	, minimist = require('minimist')
	, _ = require('lodash')
// Modules
	, app = require('./app')
// variables
	, argv = minimist(process.argv.slice(2))
	, port = argv.port || 8000
	, host = argv.host || '127.0.0.1'
// Undefined
	, server
	, options

function configureSync(options) {
	return options || fs.readFileSync('./configure')
}

options = _.extend(configureSync(options), argv)

// Configure
server = http.createServer(function(req, res) {
	setTimeout(function() {
		res.end('hello world\n')
	}, 1000)
})

// Initialization
app.listen(port, host, () => console.log('Server started on port 8000'))

// Bootstrap protection
if (process.env.NODE_ENV !== 'production') {
	// THIS MUST BE THE LAST LINE EXECUTED IN THE MAIN MODULE
	return require('safeguards').noSynchronousIO(module)
}