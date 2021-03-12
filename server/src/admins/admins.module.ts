import { jwtConstants } from './../auth/constants';
import { AuthModule } from './../auth/auth.module';
// import { AuthService } from './../auth/auth.service';
import { Admin } from './../entities/admin/admin.entity';
import { forwardRef, Module } from '@nestjs/common';
import { AdminsService } from './admins.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    AuthModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],

  providers: [AdminsService],
  exports: [TypeOrmModule],
})
export class AdminsModule {}
