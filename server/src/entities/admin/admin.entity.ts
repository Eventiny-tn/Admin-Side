import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  username: string;
  @Column()
  password: string;
  @Column({ default: null })
  imageUrl: string;
  @Column({ default: null })
  email: string;
  @Column({ default: null })
  fullName: string;
}

export interface AdminFront {
  username: string;
  password: string;
}
