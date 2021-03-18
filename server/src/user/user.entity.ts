import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('user')
@Unique(['username'])
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  address: string;
  @Column()
  address2: string;
  @Column()
  phone: string;
  @Column()
  birthday: string;
  @Column()
  city: string;
  @Column({ default: false })
  isBanned: boolean;
  @Column({ default: false })
  plannerDemand: boolean;
  @Column({ default: 0 })
  reportCounter: number;
}

export interface Userinfo {
  username: string;
  password: string;
  email: string;
  address: string;
  address2: string;
  phone: string;
  birthday: string;
  city: string;
}

export interface UserLog {
  email: string;
  password: string;
}
