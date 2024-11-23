import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TrackPointData } from './entities/trackPoint.entity';
import { TrackPointController } from './trackPoint.controller';
import { TrackPointService } from './trackPoint.service';
import { TrackPointRepository } from './trackPoint.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrackPointData]), // 엔티티 및 리포지토리 등록
  ],
  controllers: [TrackPointController],
  providers: [TrackPointService, TrackPointRepository],
})
export class TrackPointModule {}
