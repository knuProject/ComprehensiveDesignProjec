import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GisService } from './gis.service';
import { GisController } from './gis.controller';
import { GisRepository } from './gis.repository';
import { GisInfos } from './entities/gis.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GisInfos, GisRepository]), // 엔티티 및 리포지토리 등록
  ],
  controllers: [GisController],
  providers: [GisService, GisRepository],
})
export class GisModule {}
