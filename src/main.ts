import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const express = app.getHttpAdapter().getInstance();

  const publicFolder = path.join(__dirname, '..', 'public' ); // Directory with static HTML/CSS/JS/other files
  const views = path.join(__dirname,'..','src', 'views'); // Directory with *.njk templates
  

  nunjucks.configure(views, {
    autoescape: true,
    express: app
  })
  app.useStaticAssets(publicFolder);
  app.setBaseViewsDir(views);
  app.useGlobalPipes(new ValidationPipe());
  app.setViewEngine('njk');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
