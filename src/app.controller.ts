import { Controller, Get, Render} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Homepage
  @Get('/')
  @Render('index')
  getIndex() {
    return {
      title: 'Homepage'
    }
  }

  //Contact
  @Get('/contact')
  @Render('contact')
  getContact() {
    return {
      title: 'Contact'
    }
  }

  //About
  @Get('/about')
  @Render('about')
  getAbout() {
    return {
      title: 'About'
    }
  }

  //Post
  @Get('/post')
  @Render('post')
  getPost() {
    return {
      title: 'Post'
    }
  }
}


