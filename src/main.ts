import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { trpcApp } from './trpc-server';
import * as express from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const nestApp = express();
  nestApp.use('/api', app.getHttpAdapter().getInstance());
  nestApp.use('/trpc', trpcApp);
  nestApp.listen(3000, () => console.log('App running on http://localhost:3000'));
}
bootstrap();