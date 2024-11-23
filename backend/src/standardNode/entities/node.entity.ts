import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('nodes') // 테이블명은 'nodes'
export class NodeData {
  @Column({ type: 'bigint', nullable: false })
  @PrimaryGeneratedColumn()
  node_id: number;

  @Column({ type: 'integer', nullable: true })
  node_type: number;

  @Column({ type: 'double precision', nullable: true })
  lon: number;

  @Column({ type: 'double precision', nullable: true })
  lat: number;

  // geom 컬럼 추가: PostGIS에서 사용하는 geometry(Point, 4326) 형식
  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  geom: string;
}
