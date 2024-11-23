import { start } from 'repl';
import { Injectable } from '@nestjs/common';
import { TrackRepository } from './track.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Between } from 'typeorm';
import { TrackData } from './entities/tracks.entity';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(TrackData)
    private trackRepository: TrackRepository,
  ) {}
}
