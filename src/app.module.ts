import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BlogService } from './blog.service';
import { AppRepository } from './app.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BlogService, AppRepository],
})
export class AppModule {}
