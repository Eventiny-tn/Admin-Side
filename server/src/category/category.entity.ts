import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('catgory')
export class Catgory {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  name: string;
  @Column()
  image: string;
  @Column()
  description: string;
}
