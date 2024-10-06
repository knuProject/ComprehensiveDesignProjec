import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('GIS project')
    .setDescription("The Description Of GIS's Api")
    .setVersion('1.0.0')
    .addTag('gis_project')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  app.enableCors({
    // 이렇게 해두면 어떤 frontend에서도 다 접근이 가능하다.
    // 그렇기에 실제 배포의 경우에는 가능 url을 작성해줘야 한다.
    origin: true,
    credentials: true,
  });
  //
  await app.listen(process.env.PORT);
}
bootstrap();
