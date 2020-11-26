const express = require('express');
const http = require('http');

const app = express();

const users = [
  {
    name: 'John',
    id: 1,
  },
  {
    name: 'Bill',
    id: 2,
  },
  {
    name: 'Pitt',
    id: 3,
  },
];

// app.use(express.json()); // middleware (plugin) qui fourni
// req.body parsé depuis le JSON

// Middleware logger
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

// API Restful

// GET /api/users -> retourne en JSON le tableau users
app.get('/api/users', (req, res) => {
  res.json(users);
});
// GET /api/users/:id -> retourne JSON le user dont l'id est passé dans l'URL
app.get('/api/users/:id', (req, res) => {
  // const id = Number(req.params.id);
  const id = +req.params.id;

  const userFound = users.find((u) => u.id === id);

  if (!userFound) {
    // 404
    return res.status(404).json({msg: 'not found'});
  }

  res.json(userFound);
});
// POST /api/users -> insère dans le tableau le user reçu en body
// génère un id (Math.random())
// retourne JSON le user avec l'id
// Status Code : 201
app.post('/api/users', express.json(), (req, res) => {
  const userToInsert = req.body;
  userToInsert.id = Math.floor(Math.random() * 10000);

  users.push(userToInsert);

  res.json(userToInsert);
});

// DELETE /api/users/:id
// PUT /api/users/:id
// PATCH /api/users/:id

const server = http.createServer(app);

server.on('error', (err) => console.log(err));

server.listen(8080, () => {
  console.log('server started on port 8080');
});
