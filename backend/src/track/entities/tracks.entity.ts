import { TrackPointData } from 'src/trackPoint/entities/trackPoint.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tracks') // 테이블명은 'tracks'
export class TrackData {
  @Column({ type: 'integer', nullable: false })
  @PrimaryGeneratedColumn()
  ogc_fid: number;

  @Column({ type: 'integer', nullable: true })
  number: number;

  // geom 컬럼 추가: PostGIS에서 사용하는 geometry(Point, 4326) 형식
  @Column({
    type: 'geometry',
    spatialFeatureType: 'MultiLineString',
    srid: 4326,
    nullable: true,
  })
  geom: string;

  @Column({ type: 'character varying', nullable: true })
  desc: string;

  @Column({ type: 'character varying', nullable: true })
  src: string;

  @Column({ type: 'character varying', nullable: true })
  link1_href: string;

  @Column({ type: 'character varying', nullable: true })
  link1_text: string;

  @Column({ type: 'character varying', nullable: true })
  link1_type: string;

  @Column({ type: 'character varying', nullable: true })
  link2_href: string;

  @Column({ type: 'character varying', nullable: true })
  link2_text: string;

  @Column({ type: 'character varying', nullable: true })
  link2_type: string;

  @Column({ type: 'character varying', nullable: true })
  uuid: string;

  @Column({ type: 'character varying', nullable: true })
  type: string;

  @Column({ type: 'character varying', nullable: true })
  name: string;

  @Column({ type: 'character varying', nullable: true })
  cmt: string;
}
