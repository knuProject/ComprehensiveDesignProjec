import { Injectable } from '@nestjs/common';
import { GisInfos } from './entities/gis.entity';
import { GisRepository } from './gis.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GisService {
  constructor(
    @InjectRepository(GisInfos)
    private gisRepository: GisRepository,
  ) {}
  async getAllInfo(): Promise<GisInfos[]> {
    return await this.gisRepository.find();
  }
}
