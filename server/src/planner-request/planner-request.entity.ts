import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plannerRequest')
export class PlannerRequest {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstQ: string;
  @Column()
  secondQ: string;
  @Column()
  thirdQ: string;
  @Column()
  message: string;
  @Column()
  userId: number;
}

export interface PlannerRequestinfo {
  firstQ: string;
  secondQ: string;
  thirdQ: string;
  message: string;
  userId: number;
}
