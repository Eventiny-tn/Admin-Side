import { AdminFront } from './../admin/admin.entity';
import { Injectable } from '@nestjs/common';
import { AdminEntity } from '../admin/admin.entity';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
  ) {}
  async login(body: AdminFront) {
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(body.password, salt);
    // let newData = { email: body.email, password: hash };
    // await this.adminRepository.save(newData);
    const admin = await this.adminRepository.find();
    if (admin[0].email === body.email) {
      const resultCompare = bcrypt.compareSync(
        body.password,
        admin[0].password,
      );
      if (resultCompare) {
        return 'done';
      }
    }
    // return 'done';
    return new Error();
  }
}
