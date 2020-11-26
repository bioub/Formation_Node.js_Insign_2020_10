const net = require('net');

const socket = net.createConnection(80, 'example.com');

// Duplex stream
socket.pipe(process.stdout);

socket.on('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: example.com\r\n');
  socket.end('\r\n');
});

// plutôt des bibliothèques : axios, superagent, got
