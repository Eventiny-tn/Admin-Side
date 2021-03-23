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
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { EventModule } from './event/event.module';
import { CategoryService } from './category/category.service';
import { UserModule } from './user/user.module';
import { PlannerRequestModule } from './planner-request/planner-request.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    AdminsModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
    CategoryModule,
    EventModule,
    UserModule,
    PlannerRequestModule,
  ],
  controllers: [AppController, AdminController, CategoryController],
  providers: [AppService, AdminsService, CategoryService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
