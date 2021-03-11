import { Admin } from '../entities/admin/admin.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
