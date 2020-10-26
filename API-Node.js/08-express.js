const express = require('express');

const app = express();

// on tente de parser le JSON de toutes les requêtes
// moyen en terme de perf
// app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>Hello, world !</h2>');
});

app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello' });
});

app.get('/api/hello/:name', (req, res) => {
  res.json({ msg: 'Hello ' + req.params.name });
});

// app.post('/register', express.json())
// app.post('/register', (req, res) => {
//   // JSON / URL-encoded username=romain&password=1234 / FormData (API browser) / Raw
//   console.log(req.body);
// });
app.post('/register', express.json(), (req, res) => {
  // JSON / URL-encoded username=romain&password=1234 / FormData (API browser) / Raw
  console.log(req.body);

  // pour répondre appeler res.json/send/sendFile/redirect/end 1 seule fois
});

app.listen(8080, () => {
  console.log('server started');
});

// const http = require('http');
// const server = http.createServer();

// server.on('request', app);

// server.on('error', (err) => {
//   console.log(err.message);
// });

// server.once('listening', () => {
//   console.log('server started');
// });

// server.listen(8080);
