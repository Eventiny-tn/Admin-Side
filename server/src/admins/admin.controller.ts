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

  @Post()
  validateUserPassword(@Body() body: AdminFront): Object {
    return this.adminsService.validateUserPassword(body);
  }
  @Get('/check')
  checkLogin(@Req() request: Request): Request {
    return this.checkLogin(request);
  }
}
