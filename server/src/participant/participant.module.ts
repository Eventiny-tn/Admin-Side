import { CommentsModule } from './../comments/comments.module';
import { ImagesModule } from './../images/images.module';
import { CategoryModule } from './../category/category.module';
import { UserModule } from './../user/user.module';
import { EventModule } from 'src/event/event.module';
import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from './participant.entity';
import { UserService } from 'src/user/user.service';
import { EventService } from 'src/event/event.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Participant]),
    EventModule,
    UserModule,
    CategoryModule,
    ImagesModule,
    CommentsModule,
  ],
  controllers: [ParticipantController],
  providers: [ParticipantService, UserService, EventService],
  exports: [TypeOrmModule, ParticipantService],
})
export class ParticipantModule {}
