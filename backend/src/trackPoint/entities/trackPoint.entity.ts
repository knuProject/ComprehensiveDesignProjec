import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('track_points') // 테이블명은 'car_data'
export class TrackPointData {
  @Column({ type: 'integer', nullable: false })
  @PrimaryGeneratedColumn() // 기본
  ogc_fid: number;

  @Column({ type: 'integer', nullable: true })
  track_fid: number;

  @Column({ type: 'integer', nullable: true })
  track_seg_id: number;

  @Column({ type: 'integer', nullable: true })
  track_seg_point: number;

  @Column({ type: 'double precision', nullable: true })
  ele: number;

  @Column({ type: 'timestamp with time zone', nullable: true })
  time: Date;

  @Column({ type: 'double precision', nullable: true })
  magvar: number;

  @Column({ type: 'double precision', nullable: true })
  geoidheight: number;

  @Column({ type: 'integer', nullable: true })
  sat: number;

  @Column({ type: 'double precision', nullable: true })
  hdop: number;

  @Column({ type: 'double precision', nullable: true })
  vdop: number;

  @Column({ type: 'double precision', nullable: true })
  pdop: number;

  @Column({ type: 'double precision', nullable: true })
  ageofdgpsdata: number;

  @Column({ type: 'integer', nullable: true })
  dgpsid: number;
  // geom 컬럼 추가: PostGIS에서 사용하는 geometry(Point, 4326) 형식
  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  geom: string;

  @Column({ type: 'character varying', nullable: true })
  link2_href: string;

  @Column({ type: 'character varying', nullable: true })
  link2_text: string;

  @Column({ type: 'character varying', nullable: true })
  link2_type: string;

  @Column({ type: 'character varying', nullable: true })
  sym: string;

  @Column({ type: 'character varying', nullable: true })
  type: string;

  @Column({ type: 'character varying', nullable: true })
  fix: string;

  @Column({ type: 'character varying', nullable: true })
  trk_uuid: string;

  @Column({ type: 'character varying', nullable: true })
  name: string;

  @Column({ type: 'character varying', nullable: true })
  cmt: string;

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
}
