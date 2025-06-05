import { Module } from '@nestjs/common';
import { BrokerService } from './broker.service';
import { createLoggingProxy } from '../proxy/proxy.factory';
import { PinoLoggerService } from '../logger/logger.service';

@Module({
  providers: [
    PinoLoggerService,
    {
      provide: BrokerService,
      useFactory: (logger: PinoLoggerService) => {
        const broker = new BrokerService();
        return createLoggingProxy(broker, logger);
      },
      inject: [PinoLoggerService],
    },
  ],
  exports: [BrokerService],
})
export class BrokerModule {}
