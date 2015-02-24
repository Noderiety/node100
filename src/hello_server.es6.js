// Start of main tick (Synchronous IO OK)
// Require phase
let http = require('http')
// let trycatch = require('trycatch')

// Configure phase (No more synchronous IO)
let app = http.createServer((req, res) => {
	// trycatch(() => {
		res.writeHead(200)
		res.write('Hello world\n')
		setTimeout(() => {
			// throw new Error('oh... poop')
			res.write('Second statement\n')
			res.end()
		}, 3000)
	// }, e => {
	// 	console.log('Error: ', e.stack)
	// 	res.write(e.stack)
	// 	res.end()
	// })
})

// Initialization Phase (Asynchronous IO ONLY)
app.listen(8000, () => {
	// General Execution Phase
	console.log('listening at http://localhost:8000')
})

// if (process.env.NODE_ENV !== 'production') {
// 	// THIS MUST BE THE LAST LINE EXECUTED IN THE MAIN MODULE
// 	return require('safeguards').noSynchronousIO(module);
// }
// End of main tick 