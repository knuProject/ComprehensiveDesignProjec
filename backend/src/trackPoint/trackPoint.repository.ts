import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TrackPointData } from './entities/trackPoint.entity';

@Injectable()
export class TrackPointRepository extends Repository<TrackPointData> {}
