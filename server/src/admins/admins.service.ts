import { jwtConstants } from './../auth/constants';
import { AdminFront } from '../entities/admin/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../entities/admin/admin.entity';
import { Injectable, NotFoundException, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
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
    const pass = bcrypt.compareSync(body.password, admin.password);
    if (pass) {
      let access_token = this.jwtService.sign({
        username: admin.username,
        password: admin.password,
      });
      return { auth: true, token: access_token };
    }
    return false;
  }
  // uncommint this function whenever you want to signup for admin and comment the validateUserPassword

  // async validateUserPassword(body: AdminFront): Promise<Boolean | object> {
  //   const saltRounds = 10;
  //   const salt = bcrypt.genSaltSync(saltRounds);
  //   const hash = bcrypt.hashSync(body.password, salt);
  //   body.password = hash;
  //   console.log(body);

  //   await this.adminRepository.save({
  //     username: body.username,
  //     password: hash,
  //   });
  //   return { success: true };
  // }

  // ------------------------------------------------------------------------------------------------------
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

  async updatePassword(body): Promise<Error | string> {
    const admin = await this.adminRepository.findOne({ id: 1 });
    const checkedPass = bcrypt.compareSync(
      body.current_password,
      admin.password,
    );
    if (checkedPass) {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(body.new_password, salt);
      body.new_password = hash;
      await this.adminRepository.update(1, { password: hash });
      return 'done';
    } else {
      return new NotFoundException('INVALID ENTRIES');
    }
  }
  async uploadPictureProfile(image): Promise<Error | string> {
    console.log(image);
    if (image) {
      await this.adminRepository.update(1, { imageUrl: image.image });
      return 'done';
    } else {
      return new NotFoundException('INVALID ENTRIES');
    }
  }

  async adminImg(req): Promise<Error | object> {
    console.log(req);

    const img = await this.adminRepository.findOne(1);

    return img;
  }

  async updateInfo(body: object): Promise<Error | object | string> {
    if (body) {
      console.log(body);

      await this.adminRepository.update(1, body);
      return 'created';
    }
    return new NotFoundException('INVALID ENTRIES');
  }
}
