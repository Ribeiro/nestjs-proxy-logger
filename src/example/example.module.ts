// src/example/example.module.ts
import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { BrokerModule } from '../broker/broker.module';

@Module({
  imports: [BrokerModule],
  providers: [ExampleService],
})
export class ExampleModule {}
