import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExampleService } from './example/example.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const exampleService = app.get(ExampleService);
  await exampleService.execute();
  await app.close();
}

void bootstrap();
