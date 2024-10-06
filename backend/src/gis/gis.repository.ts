import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GisInfos } from './entities/gis.entity';

@Injectable()
export class GisRepository extends Repository<GisInfos> {}
