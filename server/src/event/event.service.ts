import { Events } from './event.entity';
import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'src/category/category.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Events)
    private eventRepository: Repository<Event>,
  ) {}
  async addEvent(body: object): Promise<Error | string> {
    console.log(body);
    if (body) {
      // await this.eventRepository.
      await this.eventRepository.save(body);
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }

  async getAllEvent(req): Promise<Error | object> {
    if (req) {
      const data = await this.eventRepository.find();
      return data;
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
  async getEventByCategory(@Body() body): Promise<Error | any> {
    const events = await this.eventRepository.findByIds(body.categoryID);
    console.log(events);
  }
  async updateByid(id, body): Promise<Error | string> {
    console.log(body);

    if (id && body) {
      await this.eventRepository.update(id, body);
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
  async deleteOneById(id: number): Promise<Error | string> {
    if (id) {
      await this.eventRepository.delete(id);
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
}
