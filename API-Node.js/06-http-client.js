const http = require('http');

// historiquement -> request
// axios, superagent, node-fetch
const req = http.request('http://example.com/');

req.on('response', (res) => {
  console.log(res.statusCode);
  console.log(res.headers);
  res.pipe(process.stdout);
});

req.end();

