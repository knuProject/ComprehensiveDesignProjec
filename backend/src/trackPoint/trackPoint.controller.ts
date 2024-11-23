import { Controller, Get, Query } from '@nestjs/common';
import { TrackPointService } from './trackPoint.service';
import { TTrackData } from './types/TTrackData';

class getPointByLngLatMeterDto {
  startTime: string;
  endTime: string;
  lng: number;
  lat: number;
  meter: number;
}
class getPointByTime {
  startTime: string;
  endTime: string;
}

@Controller('trackPoint')
export class TrackPointController {
  constructor(
    private readonly trackPointService: TrackPointService, //
  ) {}

  @Get('All')
  getPointByLngLatMeter(
    @Query() query: getPointByLngLatMeterDto,
  ): Promise<TTrackData[]> {
    const { startTime, endTime, lng, lat, meter } = query;

    return this.trackPointService.getPoint({
      startTime,
      endTime,
      lng,
      lat,
      meter,
    });
  }

  @Get('time')
  getPointByTime(@Query() query: getPointByTime): Promise<string[]> {
    const { startTime, endTime } = query;

    return this.trackPointService.getPointByTime({ startTime, endTime });
  }

  // // 자동차 등록번호로 좌표 정보를 가져오는 메서드
  // @ApiOperation({ summary: 'Get GIS coordinates by CarRegNumber' })
  // @Get('carNumber')
  // getInfoByCarNumber(
  //   @Query() query: GetInfoByCarNumberDto, // 쿼리 파라미터로 받음
  // ): Promise<{ id: number; gpsX: number; gpsY: number }[]> {
  //   const { carRegNumber, boardingTime, getOffTime } = query;
  //   return this.gisService.getCoordinatesByCarNumber({
  //     getOffTime,
  //     boardingTime,
  //     carRegNumber,
  //   });
  // }

  // @ApiOperation({ summary: 'Get GIS coordinates by TimeRange' })
  // @Get('timeRange')
  // getInfoByTimeRange(
  //   @Query() query: GetInfoByTimeRangeDto,
  // ): Promise<{ id: number; gpsX: number; gpsY: number }[]> {
  //   const { startTime, endTime, polygon } = query;

  //   return this.gisService.getCoordinatesByTimeRangeAndPolygon({
  //     startTime,
  //     endTime,
  //     polygon,
  //   });
  // }
}
