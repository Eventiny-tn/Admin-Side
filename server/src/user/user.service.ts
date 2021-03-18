import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async getAllUsers(req): Promise<Error | object> {
    const users = this.userRepository.find({ isBanned: false });
    return users;
  }
  async banUser(id): Promise<Error | string> {
    console.log(id);
    await this.userRepository.update(id, { isBanned: true });
    return 'progress';
  }
}
