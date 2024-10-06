import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GisInfos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // PostGIS에서 좌표를 저장할 때 geometry 타입 사용
  //    - geometry: PostGIS의 공간 데이터 타입입니다. spatialFeatureType: 'Point'로 단일 좌표(위도, 경도)를 나타냅니다.
  //    - SRID 4326: WGS 84 좌표계(지구 표면의 GPS 좌표)를 나타냅니다
  @Column({ type: 'geometry', spatialFeatureType: 'Point', srid: 4326 })
  coordinates: string;

  @Column()
  timestamp: number;
}
