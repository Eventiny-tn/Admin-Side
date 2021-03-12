import { AdminFront } from './../entities/admin/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../entities/admin/admin.entity';
import { Injectable, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    private jwtService: JwtService,
  ) {}

  async validateUserPassword(body: AdminFront): Promise<Boolean | object> {
    const admin = await this.adminRepository.findOne({ id: 1 });
    console.log(admin);
    console.log(body);

    if (body.username === admin.username && body.password === admin.password) {
      let access_token = this.jwtService.sign({
        username: admin.username,
        password: admin.password,
      });
      console.log('==>>>', access_token);
      return { auth: true, token: access_token };
    }
    return false;
  }
  async checkLogin(req: Request): Promise<Request | string> {
    console.log('=>', req);
    return req;
  }
  //   async verifyToken(token): Promise <JwtService> {
  //     return await
  //   }
}
