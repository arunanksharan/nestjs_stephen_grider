import { Expose, Transform } from 'class-transformer';
import { UserEntity } from 'src/users/users.entity';

export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  approved: boolean;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  name: string;

  @Expose()
  year: number;

  @Expose()
  mileage: number;

  @Expose()
  lng: number;

  @Expose()
  lat: number;

  @Expose()
  price: number;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
