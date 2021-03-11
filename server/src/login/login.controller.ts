import { AdminFront } from '../entities/admin/admin.entity';
import { LoginService } from './login.service';
import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';

import { Admin } from '../entities/admin/admin.entity';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  login(@Body() body: AdminFront): Object {
    return this.loginService.login(body);
  }
}
