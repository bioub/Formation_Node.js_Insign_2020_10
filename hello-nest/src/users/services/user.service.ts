import { Injectable } from '@nestjs/common';
import { UserDto } from '../models/user.dto';
import { User } from '../models/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
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

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: number | string) {
    return this.users.find((u) => u.id === +id);
  }

  async create(userDto: UserDto) {
    const user: User = {
      ...userDto, // SPREAD Operator (recopie toutes les clés de userDtor)
      id: Math.floor(Math.random() * 10000),
    };

    this.users.push(user);

    return user;
  }

}
