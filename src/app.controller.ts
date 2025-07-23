import { Controller, Get, Param, Render, Req} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { BlogService } from './blog.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly blogService: BlogService) {}

  //Homepage
  @Get('/')
  @Render('index')
  async getIndex() {
    const posts = await this.blogService.getAllPosts();
    return {
      title: 'Homepage',
      posts,
      postCount: posts.length
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

  //Post by slug 
  @Get('/post/:postSlug')
  @Render('post')
  async getPostBySlug(@Param('postSlug') postSlug: string) {
    const post = await this.blogService.getPostBySlug(postSlug);

    return {
      title: 'Post',
      post
    }
  }

  @Get('/post')
  @Render('post')
  async getPost() {
    
    const posts = await this.blogService.getAllPosts();

    return {
      title: 'Post',
      post: posts[0]
    }
  }
}


