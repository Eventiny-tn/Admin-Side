import { Event } from './../event/event.entity';
import {
  Unique,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
@Entity('category')
@Unique(['name'])
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  name: string;
  @Column()
  image: string;
  @Column({ type: 'text' })
  description: string;

  @ManyToMany((type) => Event, (event) => event.categories)
  event: Event[];
}

export interface CategoryType {
  name: string;
  image: string;
  description: string;
}
