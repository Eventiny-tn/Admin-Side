import { Controller, Get, Param, Patch, Req } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers(@Req() req): Promise<Error | object> {
    return this.userService.getAllUsers(req);
  }
  @Get('all')
  getUsers(@Req() req): Promise<Error | object> {
    return this.userService.getUsers(req);
  }
  @Patch(':id')
  banUser(@Param() id: number): Promise<Error | string> {
    return this.userService.banUser(id);
  }
  @Get('filter/:id')
  filterUserBanned(@Param() id: number): Promise<Error | object> {
    return this.userService.filterUserBanned(id);
  }
}
