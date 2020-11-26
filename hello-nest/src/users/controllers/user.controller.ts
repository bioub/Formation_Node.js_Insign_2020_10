import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt.guard';
import { User, UserDto } from '../models/user.model';
import { UserService } from '../services/user.service';

let users = [];

@Controller('/api/users')
export class UserController {

  // private userService: UserService;

  // constructor(userService: UserService) {
  //   this.userService = userService
  // }

  constructor(private readonly userService: UserService) {}

  // Exercice: créer et répondre aux routes suivantes

  // GET /api/users -> retourne en JSON le tableau users
  @Get()
  async list(): Promise<User[]> {
    return await this.userService.findAll();
  }

  // GET /api/users/:id -> retourne JSON le user dont l'id est passé dans l'URL
  @Get('/:id')
  async show(@Param('id') id: string): Promise<User> {
    const userFound = this.userService.findById(id);

    if (!userFound) {
      throw new NotFoundException('User not found');
    }

    return userFound;
  }

  // POST /api/users -> insère dans le tableau le user reçu en body
  // génère un id (Math.random())
  // retourne JSON le user avec l'id
  // Status Code : 201

  // KEEP controllers thin and fat models

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UseGuards(JwtGuard)
  async create(@Body() userDto: UserDto): Promise<User> {
    return await this.userService.create(userDto);
  }

  // Exercice sur les services
  // déplacer les code sur les tableaux dans le service UserService

  // DELETE /api/users/:id
  @Delete('/:id')
  delete(@Param('id') id: string): User {
    const userFound = users.find((u) => u.id === +id);

    if (!userFound) {
      throw new NotFoundException('User not found');
    }

    users = users.filter((u) => u.id !== +id);

    return userFound;
  }

  // PUT /api/users/:id
  @Put('/:id')
  replace(@Param('id') id: string, @Body() userDto: UserDto): User {
    const userFound = users.find((u) => u.id === +id);

    if (!userFound) {
      throw new NotFoundException('User not found');
    }

    const indexFound = users.indexOf(userFound);

    users[indexFound] = {
      ...userDto,
      id: users[indexFound].id
    };

    return userFound;
  }

  // PATCH /api/users/:id
  @Patch('/:id')
  update(@Param('id') id: string, @Body() userDto: Partial<UserDto>): User {
    const userFound = users.find((u) => u.id === +id);

    if (!userFound) {
      throw new NotFoundException('User not found');
    }

    const indexFound = users.indexOf(userFound);

    users[indexFound] = {
      ...users[indexFound],
      ...userDto,
    };

    return userFound;
  }

}
