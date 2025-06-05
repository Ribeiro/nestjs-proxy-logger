/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/broker/broker.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokerService {
  // eslint-disable-next-line @typescript-eslint/require-await
  async sendMessage(queue: string, message: any) {
    return { status: 'sent', queue, message };
  }

  getQueueInfo(queue: string) {
    return { queue, messages: 42 };
  }
}
