import { AdminFront } from './../../dist/entities/admin/admin.entity.d';
import { Repository, EntityRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './../auth/dto/auth-credentials.dto';
import { Admin } from './../entities/admin/admin.entity';
@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<any> {
    console.log('====>>>>>>>>>>>>>', authCredentialsDto);
    const { username, password } = authCredentialsDto;

    const admin = await this.findOne({ username });

    if (username == admin.username) {
      const resultCompare = bcrypt.compareSync(password, admin.password);
      if (resultCompare) {
        return 'done';
      }
    } else {
      return new Error();
    }
  }

  // async login(body: AdminFront): Promise<string> {
  //   let admin = new Admin();
  //   admin.username = await body.username;
  //   admin.password = await body.password;
  //   const salt = bcrypt.genSaltSync(10);
  //   const hash = bcrypt.hashSync(admin.password, salt);
  //   admin.password = await hash;
  //   // await admin.save();
  //   console.log('admin =>', admin);

  //   return 'ok';
  // }
}
