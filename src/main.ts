import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerApiDocumentation } from './common/swagger/swagger-api-documentation';
import { ConfigService } from '@nestjs/config';
import { ConfigurationType } from './common/configuration/configuration.interface';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService<ConfigurationType> =
    app.get(ConfigService);

  app.enableCors();
  app.setGlobalPrefix('api/v1');
  SwaggerApiDocumentation.setup(app);

  const port = configService.getOrThrow<number>('PORT');
  await app.listen(port);

  Logger.log(`${configService.getOrThrow<string>('APP_NAME')} is running!`);
}
bootstrap();
