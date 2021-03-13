import { AdminsService } from './admins.service';
import { AdminFront } from './../entities/admin/admin.entity';
import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Req,
  Request,
} from '@nestjs/common';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminsService: AdminsService) {}
  @Get('check')
  checkLogin(
    @Headers('authorization') Authorization: string,
  ): Promise<object | string> {
    // const auth_token
    return this.adminsService.checkLogin(Authorization);
  }
  @Post()
  validateUserPassword(@Body() body: AdminFront): Object {
    return this.adminsService.validateUserPassword(body);
  }
}
