import { Body, Controller, Get, Post, Render, Req, Res } from '@nestjs/common';

import { IsEmail, IsNotEmpty } from 'class-validator';

export class BlogPostDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    teaser: string;

    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    author: string;

    @IsNotEmpty()
    image: string;
}

@Controller('admin')
export class AdminController {

    @Get('/')
    @Render('admin/index.njk')
    async getIndex() {
        return {
            title: 'Admin'
        }
    }

    @Get('/newPost')
    @Render('admin/newPost.njk')
    async getNewPost() {
        return {
            title: 'Admin'
        }
    }

    @Get('/blogList')
    @Render('admin/blogList.njk')
    async getPosts() {
        return {
            title: 'Admin'
        }
    }

    @Get('/trash')
    @Render('admin/trash/trash.njk')
    async getTrash() {
        return {
            title: 'Admin'
        }
    }

    @Post('/new')
    @Render('admin/newPost.njk')
    async postNew(@Body() body: BlogPostDto, @Res() res) {
        console.log(res);
        try {
            return res.redirect('/success');
        } catch (error) {
            if (error) {
                const response = error.getResponse();
                console.log(response)
                return res.render('posts/new'), {
                    title: 'Admin',
                    body
                }
            }
        }
    }
}