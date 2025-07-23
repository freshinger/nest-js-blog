import { Injectable } from '@nestjs/common';
import { Post } from './types/global';
import slug from 'slug'
import { AppRepository } from './app.repository';

@Injectable()
export class BlogService {
  constructor(private readonly appRepository: AppRepository){}

  async getAllPosts(): Promise<Post[]>  {
    const posts = await this.appRepository.getPostFileData();
    return enrichPosts(posts);
  }

  async getPostById(postId: string): Promise<Post | undefined>  {
    
    const posts = await this.appRepository.getPostFileData();
    const enriched = enrichPosts(posts);
    return enriched.find((post) => post.id === postId);
  }
  async getPostBySlug(slug: string): Promise<Post | undefined>  {
    
    
    const posts = await this.appRepository.getPostFileData();
    const enriched = enrichPosts(posts);
    return enriched.find((post) => post.slug == slug);
  }
}

export function enrichPosts(rawPosts: Post[]): Post[] {
    return rawPosts.map((p: Post, i: number) => {
        return {
            ...p,
            slug: p.slug ?? slug(p.title),
            id: p.id ?? String(i + 1),
            createdAtString: new Date(p.createdAt).toLocaleString()
    }
  });
}