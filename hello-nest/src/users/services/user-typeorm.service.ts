import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../models/user.dto';
import { User } from '../models/user.entity';

@Injectable()
export class UserTypeormService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({
      take: 100,
    }); // SELECT id, name FROM user;
  }

  async findById(id: number | string) {
    return this.usersRepository.findOne(id);
  }

  async create(userDto: UserDto) {
    return this.usersRepository.save(userDto);
  }
}
