import { UserEntity } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  price: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @ManyToOne(() => UserEntity, (user) => user.reports)
  user: UserEntity;
}
