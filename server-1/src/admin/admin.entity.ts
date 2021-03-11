import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  email: string;
  @Column()
  password: string;
}

export interface AdminFront {
  email: string;
  password: string;
}
