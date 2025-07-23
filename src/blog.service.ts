import { Injectable } from '@nestjs/common';
import { Post } from './types/global';
import { readFile } from 'fs/promises';
import * as path from 'node:path';
import slug from 'slug'

@Injectable()
export class BlogService {
  async getAllPosts(): Promise<Post[]>  {
    
    const pathto = path.join(__dirname, '..', 'data/');
    //TODO: readfile in repo
    const data = await readFile(pathto +'blog.json', {encoding: 'utf8'});
    const posts = JSON.parse(data);
    return enrichPosts(posts);
  }

  async getPostById(postId: string): Promise<Post | undefined>  {
    
    const pathto = path.join(__dirname, '..', 'data/');
    //TODO: readfile in repo
    const data = await readFile(pathto +'blog.json', {encoding: 'utf8'});
    const parsed =  JSON.parse(data);
    return parsed.find((post) => {post.id === postId});
  }
  async getPostBySlug(slug: string): Promise<Post | undefined>  {
    
    const pathto = path.join(__dirname, '..', 'data/');
    //TODO: readfile in repo
    const data = await readFile(pathto +'blog.json', {encoding: 'utf8'});
    const parsed =  JSON.parse(data);
    const enriched = enrichPosts(parsed);
    return enriched.find((post) => {
      return post.slug == slug});
  }
}


export function enrichPosts(rawPosts: Post[]): Post[] {
    return rawPosts.map((p: Post, i: number) => {
        return {
            ...p,
            slug: p.slug ?? slug(p.title),
            id: p.id ?? String(i + 1)
        }
    })
}