import { Body, Req } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { PlannerRequestService } from './planner-request.service';

@Controller('admin')
export class PlannerRequestController {
  constructor(private readonly plannerRequestService: PlannerRequestService) {}
  @Get('plannerRequest')
  getallPendingRequests(@Req() req): Promise<Error | object> {
    return this.plannerRequestService.getallPendingRequests(req);
  }
}
