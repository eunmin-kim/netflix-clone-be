import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Netflix clone coding backend')
  .setDescription('API 명세서')
  .setVersion('0.0.1')
  .addTag('Test')
  .build();
