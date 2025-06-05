// src/example/example.service.ts
import { Injectable } from '@nestjs/common';
import { BrokerService } from '../broker/broker.service';

@Injectable()
export class ExampleService {
  constructor(private readonly broker: BrokerService) {}

  async execute() {
    await this.broker.sendMessage('filaX', { hello: 'world' });
    this.broker.getQueueInfo('filaX');
  }
}
