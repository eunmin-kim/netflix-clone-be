import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from '../config/swagger.config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const env_port = configService.get<string>('PORT');
  const port = parseInt(env_port, 10) || 3000; // fallback to 3000 if port is undefined

  /**
   * Swagger 생성
   */
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  await app.listen(port);
}

bootstrap();
