import { AdminsService } from './admins.service';
import { AdminFront } from '../entities/admin/admin.entity';
import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Put,
  Req,
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
  @Get('img')
  adminImg(@Req() req): Promise<object | string> {
    return this.adminsService.adminImg(req);
  }
  @Post()
  validateUserPassword(@Body() body: AdminFront): Object {
    return this.adminsService.validateUserPassword(body);
  }
  @Post(':id')
  uploadPictureProfile(@Body() image: string): Promise<object | string> {
    return this.adminsService.uploadPictureProfile(image);
  }
  @Patch()
  updatePassword(@Body() body: object): Promise<object | string> {
    console.log('====>>>>', body);

    return this.adminsService.updatePassword(body);
  }

  @Put('updateData')
  updateInfo(@Body() body: object): Promise<object | string> {
    return this.adminsService.updateInfo(body);
  }
}
