// Start of main tick (Synchronous IO OK)
// Require phase
let http = require('http')

class Server {
	constructor(callback, options={}) {
		this.server = http.createServer(callback)
		this.port = options.port
	}

	initialize() {
		return this.server.listen.promise(this.port)
	}
}

module.exports = Server