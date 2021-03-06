import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Post()
  // async login(@Request() req) {
  //   return req.user;
  // }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
