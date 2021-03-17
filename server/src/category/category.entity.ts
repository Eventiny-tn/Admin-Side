import { Events } from './../event/event.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  name: string;
  @Column()
  image: string;
  @Column()
  description: string;
  @Column()
  event_id: number;

  @ManyToMany(() => Events)
  @JoinTable({
    name: 'event_category',
    joinColumn: { name: 'event_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  })
  event: Events[];
}
export interface CategoryType {
  name: string;
  image: string;
  description: string;
}
