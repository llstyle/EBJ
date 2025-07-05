import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user)
  }
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.userRepository.update(id, updateUserDto);
    return this.findById(id);
  }
  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async findById(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }
}
