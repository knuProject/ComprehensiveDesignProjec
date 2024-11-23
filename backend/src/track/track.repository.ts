import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TrackData } from './entities/tracks.entity';

@Injectable()
export class TrackRepository extends Repository<TrackData> {}
