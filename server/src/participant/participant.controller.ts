import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParticipantService } from './participant.service';

@Controller()
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}
  @Post('ticket/:user_id/:event_id')
  buyTicket(
    @Param('user_id') user_id: number,
    @Param('event_id') event_id: number,
    @Body() body: object,
  ): Promise<Error | object> {
    return this.participantService.buyTicket(user_id, event_id, body);
  }
  @Get('participant/:user_id/:event_id')
  getParticipant(
    @Param('event_id') event_id: number,
    @Param('user_id') user_id: number,
  ): Promise<Error | object> {
    return this.participantService.getParticipant(event_id, user_id);
  }
}
