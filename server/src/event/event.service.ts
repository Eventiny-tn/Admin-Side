import { Participant } from './../participant/participant.entity';
import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Category } from 'src/category/category.entity';
import { Images } from 'src/images/images.entity';
import { Event } from '../event/event.entity';
import { Comment } from 'src/comments/comment.entity';
@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Images)
    private imageRepository: Repository<Images>,
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    private connection: Connection,
  ) {}
  async addEvent({
    name,
    caption,
    price,
    ticket,
    eventDate,
    dateStart,
    dateEnds,
    location,
    images,
    lat,
    lng,
    cover,
    categories,
    userId,
    description,
  }): Promise<Error | string> {
    if (name) {
      // await this.eventRepository.
      let event = new Event(
        name,
        caption,
        price,
        ticket,
        eventDate,
        dateStart,
        dateEnds,
        location,
        lat,
        lng,
        cover,
        description,
      );
      try {
        event.categories = [];
        event.user = userId;
        // find the id of the categories by name
        for (let i = 0; i < categories.length; i++) {
          var currentObj = await this.categoryRepository.find({
            name: categories[i],
          });
          if (currentObj.length > 0) {
            event.categories.push(currentObj[0]);
          }
        }
        let myImages = [];
        let arrayOfPromises = [];
        images.forEach((element) => {
          var img = new Images(element);
          arrayOfPromises.push(this.connection.manager.save(img));
          myImages.push(img);
        });
        Promise.all(arrayOfPromises)
          .then(() => {
            event.images = myImages;
            return this.connection.manager.save(event);
          })
          .then(() => {
            console.log('done');
          });
        return 'done';
      } catch (err) {
        return new NotFoundException('NOT FOUND');
      }
    }
  }

  async getAllEvent(req): Promise<Error | object> {
    if (req) {
      const data = await this.eventRepository.find({ pending: false });
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
      await this.imageRepository.query(
        `delete from images where imagesId=${id};`,
      );
      await this.commentRepository.query(
        `delete from comments where eventId=${id};`,
      );
      await this.participantRepository.query(
        `delete from participant where eventId=${id};`,
      );
      await this.eventRepository.query(`delete from event where id=${id};`);
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
  async approveEvent(eventId: object): Promise<Error | string> {
    if (eventId) {
      console.log(eventId);

      await this.eventRepository.update(eventId, { pending: true });
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
}
