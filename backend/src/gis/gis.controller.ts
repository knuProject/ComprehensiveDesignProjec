import { Controller, Get, Req } from '@nestjs/common';
import { GisService } from './gis.service';
import { ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { GisInfos } from './entities/gis.entity';

// @UseFilters(HttpExceptionFilter)
@Controller('gis')
export class GisController {
  constructor(
    private readonly gisService: GisService, //
  ) {}

  @ApiOperation({ summary: 'test ' })
  @Get()
  getGisInfo(
    @Req() req: Request, //
  ): Promise<GisInfos[]> {
    return this.gisService.getAllInfo();
  }
}
