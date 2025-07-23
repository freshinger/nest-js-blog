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
    //TODO: conversion in service
    posts.map( (post) => {post.createdAtString = new Date(post.createdAt).toLocaleString()})
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

  //Post
  @Get('/post/:postID')
  @Render('post')
  async getPost(@Param('postID') postID: string) {
const post = await this.blogService.getPostBySlug(postID);
console.log(post);

    return {
      title: 'Post',
      post
    }
  }
}


