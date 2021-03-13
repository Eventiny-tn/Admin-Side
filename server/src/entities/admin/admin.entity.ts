import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  username: string;
  @Column()
  password: string;
}

export interface AdminFront {
  username: string;
  password: string;
}
