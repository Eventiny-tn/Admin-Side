import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { AdminsModule } from './admins/admins.module';
import { AdminController } from './admins/admin.controller';
import { AdminsService } from './admins/admins.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    AdminsModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AppController, AdminController],
  providers: [AppService, AdminsService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
