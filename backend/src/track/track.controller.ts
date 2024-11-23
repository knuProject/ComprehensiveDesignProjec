import { Controller, Get, Query } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(
    private readonly trackService: TrackService, //
  ) {}

  // @Get('all')
  // getAllInfo(): Promise<{ id: number; gpsX: number; gpsY: number }[]> {
  //   return this.gisService.getAllCoordinates();
  // }

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
