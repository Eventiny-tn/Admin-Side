import { Event } from '../event/event.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('images')
export class Images {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  image: string;
  @ManyToOne(() => Event, (event) => event.images)
  images: Event;

  constructor(image: string) {
    this.image = image;
  }
}
