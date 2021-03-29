import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Participant } from './participant.entity';
import { EventModule } from 'src/event/event.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { EventService } from 'src/event/event.service';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  controllers: [ParticipantController],
  providers: [
    ParticipantService,
    Repository,
    Connection,
    UserService,
    EventService,
  ],
  exports: [ParticipantService],
})
export class ParticipantModule {}
