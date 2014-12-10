let http = require('http');
let server = http.createServer((req, res) => {
  if (req.url === '/hello') {
  	console.log('Request received')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    setTimeout(() => {
      res.end('Hello Y\'all\n');
    }, 5000)
    return
  }

  res.end('Pong')
  // throw new Error('Fail')
})
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

// process.on('uncaughtException', (err) => {
// 	console.log(err.stack)
// 	server.close()
// 	setTimeout(() => process.exit(), 2000)
// })