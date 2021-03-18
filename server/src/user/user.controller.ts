import { Controller, Get, Param, Patch, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers(@Req() req): Promise<Error | object> {
    return this.userService.getAllUsers(req);
  }
  @Patch(':id')
  banUser(@Param() id: number): Promise<Error | string> {
    return this.userService.banUser(id);
  }
}
