let net = require('net');

let server = net.createServer(socket => {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');