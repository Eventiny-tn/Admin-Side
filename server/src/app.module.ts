import { AdminsModule } from './admins/admins.module';
import { AdminController } from './admins/admin.controller';
import { AdminsService } from './admins/admins.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, AdminsModule],
  controllers: [AppController, AdminController],
  providers: [AppService, AdminsService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
