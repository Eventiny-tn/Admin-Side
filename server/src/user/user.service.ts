import { NotFoundException } from '@nestjs/common';
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
  async getUsers(req): Promise<Error | object> {
    const users = this.userRepository.find();
    return users;
  }

  async banUser(id): Promise<Error | string> {
    const user = await this.userRepository.findOne(id.id);
    if (user.isBanned == false) {
      await this.userRepository.update(id, { isBanned: true });
      return 'done';
    } else if (user.isBanned) {
      await this.userRepository.update(id, { isBanned: false });
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
  async filterUserBanned(id): Promise<Error | object> {
    if (id.id == 1) {
      const data = await this.userRepository.find({ isBanned: true });
      return data;
    } else if (id.id == 2) {
      const data = await this.userRepository.find({ isBanned: false });
      return data;
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
}
