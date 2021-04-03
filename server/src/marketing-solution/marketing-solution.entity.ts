import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('marketing_solution')
export class MarketingSolution {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  pagename: string;
  @Column()
  pagelink: string;
  @Column()
  price: string;
  @Column()
  userId: number;
}

export interface PlannerRequestinfo {
  pahename: string;
  paagelink: string;
  price: string;
  userId: number;
}
