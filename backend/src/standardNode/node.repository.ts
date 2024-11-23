import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NodeData } from './entities/node.entity';

@Injectable()
export class NodeRepository extends Repository<NodeData> {}
