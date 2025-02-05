import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTags } from './constatnt';

export class SwaggerApiDocumentation {
  static setup(app: INestApplication): void {
    const options = new DocumentBuilder()
      .setTitle('Flosy feen api v1')
      .setDescription('The api structure documentation for flosy feen app')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag(SwaggerTags.OTP)
      .addTag(SwaggerTags.AUTH)
      .addTag(SwaggerTags.USER)
      .addTag(SwaggerTags.FORGET_PASSWORD)
      .addTag(SwaggerTags.WALLET)
      .addTag(SwaggerTags.TRANSACTION_CATEGORY)
      .addTag(SwaggerTags.WALLET_TRANSACTION)
      .addTag(SwaggerTags.STATISTICS)
      .build();

    const document = SwaggerModule.createDocument(app, options, {
      ignoreGlobalPrefix: false,
    });

    SwaggerModule.setup('/docs', app, document, {
      swaggerOptions: {
        displayRequestDuration: true,
      },
    });
  }
}
