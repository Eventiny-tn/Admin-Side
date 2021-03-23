import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository, Connection } from 'typeorm';
import { PlannerRequest } from './planner-request.entity';

@Injectable()
export class PlannerRequestService {
  constructor(
    @InjectRepository(PlannerRequest)
    private plannerRepository: Repository<PlannerRequest>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private connection: Connection,
  ) {}
  async saveFormPremium(body): Promise<Error | string> {
    console.log('ala', body);
    if (body) {
      await this.plannerRepository.save(body);
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }

  async getallPendingRequests(req): Promise<Error | object> {
    const arr = [];
    let data = await this.plannerRepository.find();
    for (let i = 0; i < data.length; i++) {
      let currentUser = await this.userRepository.findOne(data[i].userId);
      arr.push({
        plannerRequest: data[i],
        username: currentUser,
      });
    }
    return arr;
  }
}
