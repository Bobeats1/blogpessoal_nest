import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// Ajustando a Timezone do Banco de Dados 
  process.env.TZ = '03:00'

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
