let http = require('http')
let trycatch = require('trycatch')

let app = http.createServer((req, res) => {
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
})

app.listen(8000, () => console.log('listening at http://localhost:8000'))