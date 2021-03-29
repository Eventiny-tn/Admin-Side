import { Event } from 'src/event/event.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 255 })
  comment: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  time: string;
  @ManyToOne(() => User, (user) => user.comments)
  commentator: User;

  @ManyToOne(() => Event, (event) => event.comments)
  event: Event;
  constructor(comment: string) {
    this.comment = comment;
  }
}
export interface Comment {
  comment: string;
}
