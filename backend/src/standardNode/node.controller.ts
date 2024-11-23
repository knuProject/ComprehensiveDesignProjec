import { Controller, Get } from '@nestjs/common';
import { NodeService } from './node.service';
import { NodeData } from './entities/node.entity';

@Controller('node')
export class NodeController {
  constructor(
    private readonly nodeService: NodeService, //
  ) {}

  @Get('all')
  getAllInfo(): Promise<NodeData[]> {
    return this.nodeService.getAllNode();
  }
}
