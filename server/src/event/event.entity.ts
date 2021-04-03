import { Images } from '../images/images.entity';
import { Category } from 'src/category/category.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Comment } from '../comments/comment.entity';
import { Participant } from 'src/participant/participant.entity';

// import { Participant } from 'src/participant/participant.entity';
@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  name: string;
  @Column('text')
  caption: string;
  @Column({ default: 'Free' })
  price: string;
  @Column()
  ticket: number;
  @Column()
  eventDate: string;
  @Column({ default: false })
  dateStart: string;
  @Column({ default: false })
  dateEnds: string;
  @Column()
  location: string;
  @Column({ default: null })
  lat: string;
  @Column({ default: null })
  lng: string;
  @Column()
  cover: string;
  @Column('longtext')
  description: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  time: string;
  @Column({ default: false })
  pending: boolean;

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable({
    name: 'event_category',
    joinColumn: { name: 'category_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'event_id', referencedColumnName: 'id' },
  })
  categories: Category[];

  @ManyToOne(() => User, (user) => user.events)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.event)
  comments: Comment[];

  @OneToMany(() => Images, (image) => image.images)
  images: Images[];
  @OneToMany(() => Participant, (participant) => participant.event)
  participants: Participant[];
  constructor(
    name: string,
    caption: string,
    price: string,
    ticket: number,
    eventDate: string,
    dateStart: string,
    dateEnds: string,
    location: string,
    lat: string,
    lng: string,
    cover: string,
    description: string,
  ) {
    this.name = name;
    this.caption = caption;
    this.price = price;
    this.ticket = ticket;
    this.eventDate = eventDate;
    this.dateStart = dateStart;
    this.dateEnds = dateEnds;
    this.location = location;
    this.lat = lat;
    this.lng = lng;
    this.cover = cover;
    this.description = description;
  }
}
