import { EventService } from './event.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  addEvent(@Body() body: any): Promise<Error | string> {
    return this.eventService.addEvent(body);
  }
  @Get()
  getAllEvent(@Req() req): Promise<Error | object> {
    return this.eventService.getAllEvent(req);
  }
  @Put(':id')
  updateByid(
    @Param() id: number,
    @Body() body: object,
  ): Promise<Error | string> {
    return this.eventService.updateByid(id, body);
  }
  @Delete(':id')
  deleteOneById(@Param() id: number): Promise<Error | string> {
    return this.eventService.deleteOneById(id);
  }
}
