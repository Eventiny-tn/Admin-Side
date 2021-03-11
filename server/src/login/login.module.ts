import { AdminEntity } from './../admin/admin.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
