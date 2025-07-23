import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import * as path from 'node:path';
import { Post } from './types/global';

@Injectable()
export class AppRepository {
  async getPostFileData(): Promise<Post[]> {
    
        const pathto = path.join(__dirname, '..', 'data/');
        const data = await readFile(pathto +'blog.json', {encoding: 'utf8'});
        const posts = JSON.parse(data);
        return posts;
  }
}
