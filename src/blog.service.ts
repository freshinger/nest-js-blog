import { Injectable } from '@nestjs/common';
import { Post } from './types/global';
import { readFile } from 'fs/promises';
import * as path from 'node:path';

@Injectable()
export class BlogService {
  async getAllPosts(): Promise<Post[]>  {
    //constructor(){}
    const pathto = path.join(__dirname, '..', 'data/');
    const data = await readFile(pathto +'blog.json', {encoding: 'utf8'});
    return JSON.parse(data);
  }
}
