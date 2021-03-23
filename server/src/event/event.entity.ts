import { Category } from 'src/category/category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
// import moment from 'moment';
@Entity('event')
export class Events {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  name: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  time: string;
  @Column({ default: false })
  dateStart: string;
  @Column({ default: false })
  dateEnds: string;
  @Column()
  location: string;
  @Column()
  price: number;
  @Column()
  caption: string;
  @Column()
  cover: string;
  @Column()
  description: string;
  @Column('simple-array')
  images: string;
  @Column({ default: false })
  pending: boolean;

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable({
    name: 'event_category',
    joinColumn: { name: 'category_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'event_id', referencedColumnName: 'id' },
  })
  categories: Category[];

  constructor(
    name: string,
    time: string,
    dateStart: string,
    dateEnds: string,
    location: string,
    price: number,
    caption: string,
    cover: string,
    images: string,
    description: string,
  ) {
    this.name = name;
    this.time = time;
    this.dateStart = dateStart;
    this.dateEnds = dateEnds;
    this.location = location;
    this.price = price;
    this.caption = caption;
    this.cover = cover;
    this.images = images;
    this.description = description;
  }
}
