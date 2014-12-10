// Start of main tick
// Require phase (Synchronous IO OK)
// Require Core modules
let util = require('util')
// Require NPM modules
	, trycatch = require('trycatch')
// Require Local modules
	, Server = require('./lifecycle_server')

require('songbird')

function requestHandler(req, res) {
	trycatch(() => {
		res.writeHead(200)
		res.write('Hello world\n')
		setTimeout(() => {
			throw new Error('oh... poop')
			res.write('Second statement\n')
			res.end()
		}, 3000)
	}, e => {
		console.log('Error: ', e.stack)
		res.write(e.stack)
		res.end()
	})
}

// Configure phase (No more synchronous IO)
let app = new Server(requestHandler, {port: 8000})

// Initialization Phase (Asynchronous IO ONLY)
app.initialize().then(() => {
	// General Execution Phase
	console.log('listening at http://localhost:8000')
})

if (process.env.NODE_ENV !== 'production') {
	// THIS MUST BE THE LAST LINE EXECUTED IN THE MAIN MODULE
	return require('safeguards').noSynchronousIO(module);
}
// End of main tick 