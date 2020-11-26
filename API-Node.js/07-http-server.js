const http = require('http');

// framework -> express
// nest, koa, hapi, fastify
const server = http.createServer();

server.on('request', /** @param {http.IncomingMessage} req @param {http.ServerResponse} res */ (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello, world !');
  } else if (req.method === 'GET' && req.url === '/api/hello') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({ msg: 'Hello' }));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/plain');
    res.end('Not found');
  }
});

server.on('error', (err) => {
  console.log(err.message);
});

server.once('listening', () => {
  console.log('server started');
});

server.listen(8080);
