import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BlogService } from './blog.service';

@Module({
  imports: [
   // ServeStaticModule.forRoot({
   //   rootPath: join(__dirname, '..', 'public'),
   //   exclude: ['/api/{*test}'],
   //   serveStaticOptions: {
   //     fallthrough: false,
   //   },      
   // }),
  ],
  controllers: [AppController],
  providers: [AppService, BlogService],
})
export class AppModule {}
