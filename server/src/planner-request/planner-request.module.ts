import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { PlannerRequestService } from './planner-request.service';
import { PlannerRequestController } from './planner-request.controller';
import { PlannerRequest } from './planner-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PlannerRequest]), UserModule],
  controllers: [PlannerRequestController],
  providers: [PlannerRequestService],
  exports: [PlannerRequestService],
})
export class PlannerRequestModule {}
