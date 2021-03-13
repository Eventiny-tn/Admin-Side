import { jwtConstants } from './../auth/constants';
import { AdminFront } from './../entities/admin/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../entities/admin/admin.entity';
import { Injectable, NotFoundException, Request } from '@nestjs/common';
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
      return { auth: true, token: access_token };
    }
    return false;
  }

  async checkLogin(Authorization: String): Promise<object | Error> {
    const token = Authorization.split(' ')[1];

    if (token) {
      const verifyingTokenExpiring = await this.jwtService.verify(
        token,
        jwtConstants,
      );
      if (verifyingTokenExpiring) {
        console.log(verifyingTokenExpiring);
        const admin = await this.adminRepository.findOne({ id: 1 });
        let access_token = this.jwtService.sign({
          username: admin.username,
          password: admin.password,
        });
        return { succes: true, token: access_token };
      }
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
}
