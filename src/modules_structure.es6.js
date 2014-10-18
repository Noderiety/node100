// Require, Configure, Initialize
// Require
// Core modules
let http = require('http')
	, fs = require('fs')
// Packages
	, minimist = require('minimist')
// Modules
	, app = require('./app')
// variables
	, argv = minimist(process.argv.slice(2))
	, port = argv.port || 8000
	, host = argv.host || '127.0.0.1'
// Undefined
	, server
	, configureFile

module.exports.configureSync = function configureSync(options) {
	configureFile = fs.readFileSync(options.dir || './configure')
}

let modulesStructure = require('modules_structure')
// other requires...

modulesStructure.configureSync({dir: __dirname})

// Configure
server = http.createServer()
server.on('request', function(req, res) {
	setTimeout(function() {
		res.end('hello world\n')
	}, 1000)
})

// Initialization
app.listen(port, host, () => console.log('Server started on port 8000'))

// 1. Require: syncIO allowed
// 2. Configure: no IO, primarily construction
// 3. Initialize: asyncIO (NO SYNC IO!!!)

// Bootstrap protection
if (process.env.NODE_ENV !== 'production') {
	// THIS MUST BE THE LAST LINE EXECUTED IN THE MAIN MODULE
	return require('safeguards').noSynchronousIO(module)
}
