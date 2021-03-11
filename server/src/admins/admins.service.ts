import { AdminFront } from './../entities/admin/admin.entity';
import { AdminRepository } from './admin.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../entities/admin/admin.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: AdminRepository,
  ) {}
  validateUserPassword(body: AdminFront): string {
    this.adminRepository.validateUserPassword(body);
    return 'done';
  }

  // async login(body: AdminFront) {
  //   // const salt = bcrypt.genSaltSync(10);
  //   // const hash = bcrypt.hashSync(body.password, salt);
  //   // let newData = { email: body.email, password: hash };
  //   await this.adminRepository.save(body);
  //   //   const admin = await this.adminRepository.find();
  //   //   if (admin[0].email === body.email) {
  //   //     const resultCompare = bcrypt.compareSync(
  //   //       body.password,
  //   //       admin[0].password,
  //   //     );
  //   //     if (resultCompare) {
  //   //       return 'done';
  //   //     }
  //   //   }
  //   return 'done';
  //   //   return new Error();
  // }
}
