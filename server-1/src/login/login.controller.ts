import { AdminFront } from './../admin/admin.entity';
import { LoginService } from './login.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AdminEntity } from '../admin/admin.entity';
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  login(@Body() body: AdminFront): Object {
    return this.loginService.login(body);
  }
}
