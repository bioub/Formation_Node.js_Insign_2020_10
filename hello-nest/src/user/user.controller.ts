import { Controller } from '@nestjs/common';

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

@Controller('/api/users')
export class UserController {

  // Exercice: créer et répondre aux routes suivantes

  // GET /api/users -> retourne en JSON le tableau users

  // GET /api/users/:id -> retourne JSON le user dont l'id est passé dans l'URL

  // POST /api/users -> insère dans le tableau le user reçu en body
  // génère un id (Math.random())
  // retourne JSON le user avec l'id
  // Status Code : 201

  // DELETE /api/users/:id

  // PUT /api/users/:id

  // PATCH /api/users/:id

}
