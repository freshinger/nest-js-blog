import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogService } from './blog.service';
import { AppRepository } from './app.repository';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [],
  controllers: [AppController, AdminController],
  providers: [AppService, BlogService, AppRepository],
})
export class AppModule {}
