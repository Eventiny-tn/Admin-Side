import { AdminsService } from './admins.service';
import { AdminFront } from './../entities/admin/admin.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminsService: AdminsService) {}
  @Post()
  validateUserPassword(@Body() body: AdminFront): Object {
    return this.adminsService.validateUserPassword(body);
  }
  // @Post()
  // login(@Body() body: AdminFront): Object {
  //   return this.adminsService.login(body);
  // }
}
