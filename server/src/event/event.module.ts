import { Events } from './event.entity';
import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Events])],
  providers: [EventService],
  controllers: [EventController],
  exports: [TypeOrmModule],
})
export class EventModule {}
