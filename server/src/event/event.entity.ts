import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  name: string;
  @Column({ type: 'date' })
  date_only: Date;
  @Column({ type: 'timestamp' })
  date_time: Date;
  @Column()
  location: string;
  @Column()
  price: number;
  @Column()
  caption: string;
  @Column()
  cover: string;
  @Column('simple-array')
  images: string[];
  @Column({ default: false })
  pending: boolean;
}
