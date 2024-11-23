import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NodeRepository } from './node.repository';
import { NodeService } from './node.service';
import { NodeData } from './entities/node.entity';
import { NodeController } from './node.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([NodeData]), // 엔티티 및 리포지토리 등록
  ],
  controllers: [NodeController],
  providers: [NodeService, NodeRepository],
})
export class NodeModule {}
