import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car_data') // 테이블명은 'car_data'
export class CarData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  car_registration_number: string;

  @Column({ type: 'varchar' })
  boarding_time: string;

  @Column({ type: 'varchar' })
  getting_off_time: string;

  @Column({ type: 'varchar' })
  time: string;

  @Column({ type: 'float8' })
  gpsX: number;

  @Column({ type: 'float8' })
  gpsY: number;

  @Column({ type: 'float8' })
  speed: number;

  // geom 컬럼 추가: PostGIS에서 사용하는 geometry(Point, 4326) 형식
  @Column({ type: 'geometry', spatialFeatureType: 'Point', srid: 4326 })
  geom: string;
}
