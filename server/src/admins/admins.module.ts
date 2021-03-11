import { Admin } from './../entities/admin/admin.entity';
import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';

import { TypeOrmModule } from '@nestjs/typeorm';
// import { AdminHttpModule } from './admin-http.module';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminsService],
  exports: [TypeOrmModule],
})
export class AdminsModule {}
