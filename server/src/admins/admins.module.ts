import { jwtConstants } from './../auth/constants';
import { AuthModule } from './../auth/auth.module';
import { Admin } from './../entities/admin/admin.entity';
import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    AuthModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],

  providers: [AdminsService],
  exports: [TypeOrmModule],
})
export class AdminsModule {}
