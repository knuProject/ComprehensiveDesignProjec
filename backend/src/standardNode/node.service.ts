import { Injectable } from '@nestjs/common';
import { NodeRepository } from './node.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { NodeData } from './entities/node.entity';

@Injectable()
export class NodeService {
  constructor(
    @InjectRepository(NodeData)
    private nodeRepository: NodeRepository,
  ) {}

  async getAllNode(): Promise<NodeData[]> {
    try {
      const nodes = await this.nodeRepository.find(); // 모든 데이터 가져오기
      return nodes;
    } catch (error) {
      console.error('Error fetching all nodes:', error);
      throw new Error('Failed to fetch nodes.');
    }
  }
}
