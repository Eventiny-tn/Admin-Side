import { CommentsModule } from './../comments/comments.module';
import { ParticipantController } from './../participant/participant.controller';
import { ImagesModule } from '../images/images.module';
import { CategoryModule } from './../category/category.module';
import { Event } from './event.entity';
import { forwardRef, Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantService } from 'src/participant/participant.service';
import { ParticipantModule } from 'src/participant/participant.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    forwardRef(() => ParticipantModule),
    CategoryModule,
    ImagesModule,
    CommentsModule,
  ],
  providers: [EventService],
  controllers: [EventController],
  exports: [TypeOrmModule],
})
export class EventModule {}
