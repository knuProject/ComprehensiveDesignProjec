import { start } from 'repl';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between } from 'typeorm';
import { TrackPointData } from './entities/trackPoint.entity';
import { TrackPointRepository } from './trackPoint.repository';

@Injectable()
export class TrackPointService {
  constructor(
    @InjectRepository(TrackPointData)
    private trackPointRepository: TrackPointRepository,
  ) {}

  // async getAllCoordinates(): Promise<
  //   { id: number; gpsX: number; gpsY: number }[]
  // > {
  //   const cars: CarData[] = await this.gisRepository.find();

  //   return cars.map((car) => ({
  //     id: car.id,
  //     gpsX: car.gpsX,
  //     gpsY: car.gpsY,
  //   }));
  // }

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
}
