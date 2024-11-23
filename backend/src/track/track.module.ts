import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { TrackRepository } from './track.repository';
import { TrackData } from './entities/tracks.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrackData]), // 엔티티 및 리포지토리 등록
  ],
  controllers: [TrackController],
  providers: [TrackService, TrackRepository],
})
export class TrackModule {}
