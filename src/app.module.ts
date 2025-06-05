// src/app.module.ts
import { Module, Logger } from '@nestjs/common';
import { ExampleModule } from './example/example.module';
import { PinoLoggerService } from './logger/logger.service';

@Module({
  imports: [ExampleModule],
  providers: [
    {
      provide: Logger,
      useClass: PinoLoggerService,
    },
  ],
})
export class AppModule {}
