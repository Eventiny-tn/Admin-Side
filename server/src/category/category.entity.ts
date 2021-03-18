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
  @Column({ type: 'text' })
  description: string;

  @ManyToMany((type) => Events, (event) => event.categories)
  event: Events[];
  // @ManyToMany(() => Events, { cascade: true })
  // @JoinTable({
  //   name: 'event_category',
  //   joinColumn: { name: 'event_id', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  // })
  // event: Events[];
}
export interface CategoryType {
  name: string;
  image: string;
  description: string;
}
