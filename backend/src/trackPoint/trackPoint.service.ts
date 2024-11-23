import { start } from 'repl';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrackPointData } from './entities/trackPoint.entity';
import { TrackPointRepository } from './trackPoint.repository';
import { TTrackData } from './types/TTrackData';

@Injectable()
export class TrackPointService {
  constructor(
    @InjectRepository(TrackPointData)
    private trackPointRepository: TrackPointRepository,
  ) {}

  async getPoint({
    startTime,
    endTime,
    lng,
    lat,
    meter,
  }: {
    startTime: string;
    endTime: string;
    lng: number;
    lat: number;
    meter: number;
  }): Promise<TTrackData[]> {
    // 문자열을 숫자로 변환

    const trackData = await this.trackPointRepository.query(
      `
        SELECT DISTINCT
          t.name,  ST_AsGeoJSON(t.geom) AS geom
        FROM
          track_points tp
        JOIN 
          tracks t
        ON 
          tp.trk_uuid = t.uuid
        WHERE
          tp.time BETWEEN $1 AND $2
          AND
          ST_DWithin(
            tp.geom::geography,
            ST_SetSRID(ST_MakePoint($3, $4), 4326)::geography,
            $5
        );
      `,
      [startTime, endTime, lng, lat, meter], // 숫자로 변환된 값을 전달
    );

    const processedData = trackData.map(
      (row: { name: string; geom: string }) => {
        const { name, geom } = row;

        // 이름에서 시간 추출
        const [trackName, startTime, endTime] = name.split('_');

        return {
          name: trackName, // 트랙 이름 저장
          startTime, // 시작 시간 저장
          endTime, // 종료 시간 저장
          geom, // WKT 그대로 저장 (파싱이 필요한 경우 추가 처리 가능)
        };
      },
    );

    console.log(processedData);
    return processedData;
  }

  async getPointByTime({
    startTime,
    endTime,
  }: {
    startTime: string;
    endTime: string;
  }): Promise<string[]> {
    return this.trackPointRepository.query(
      `
        SELECT DISTINCT
          t.name AS trackName
        FROM
          track_points tp
        LEFT JOIN
          tracks t
        ON
          tp.track_fid = t.ogc_fid
        WHERE
          tp.time BETWEEN $1 AND $2
      `,
      [startTime, endTime], // 파라미터 바인딩
    );
  }
}

// // 자동차 등록번호로 좌표만 가져오는 메서드
// async getCoordinatesByCarNumber({
//   carRegNumber,
//   boardingTime,
//   getOffTime,
// }: {
//   carRegNumber: string;
//   getOffTime: string;
//   boardingTime: string;
// }): Promise<{ id: number; gpsX: number; gpsY: number }[]> {
//   // 차량 등록번호로 해당 차량의 좌표 데이터를 가져옴
//   const cars: CarData[] = await this.gisRepository.find({
//     where: {
//       boarding_time: boardingTime,
//       getting_off_time: getOffTime,
//       car_registration_number: carRegNumber,
//     },
//   });

//   // 좌표 데이터를 반환
//   return cars.map((car) => ({
//     id: car.id,
//     gpsX: car.gpsX,
//     gpsY: car.gpsY,
//   }));
// }

// async getCoordinatesByTimeRangeAndPolygon({
//   startTime,
//   endTime,
//   polygon,
// }: {
//   startTime: string;
//   endTime: string;
//   polygon: string;
// }): Promise<{ id: number; gpsX: number; gpsY: number }[]> {
//   console.log(startTime, endTime, polygon);

//   const cars = await this.gisRepository.query(
//     `
//     SELECT id, "gpsX", "gpsY"
//     FROM car_data
//     WHERE ST_Contains(
//         ST_GeomFromText($1, 4326),
//         ST_Transform(geom, 4326)
//     )
//       AND time BETWEEN $2 AND $3
//     `,
//     [polygon, startTime, endTime],
//   );

//   console.log(cars);
//   return cars.map((car) => ({
//     id: car.id,
//     gpsX: car.gpsX,
//     gpsY: car.gpsY,
//   }));
// }
