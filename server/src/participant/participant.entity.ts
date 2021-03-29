import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Event } from '../event/event.entity';

@Entity('participant')
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quantity: number;

  @ManyToOne(() => Event, (event) => event.participants)
  event: Event;
  @ManyToOne(() => User, (user) => user.participants)
  user: User;
  constructor(quantity: number) {
    this.quantity = quantity;
  }
}
