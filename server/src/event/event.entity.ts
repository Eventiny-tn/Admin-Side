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
  category_id: number;
  @Column('simple-array')
  images: string[];
  @Column({ default: false })
  pending: boolean;
}
