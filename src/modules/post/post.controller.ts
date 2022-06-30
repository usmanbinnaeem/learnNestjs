/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsServise: PostsService) { }

    @Get()
    getAllPosts() {
        return this.postsServise.getAllposts()
    }

    @Get(':id')
    getPostbyId(@Param('id') id: string) {
        return this.postsServise.getPostbyId(Number(id));
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createPost(@Body() post: CreatePostDto) {
        console.log("Controller ====>>> ", post);

        return this.postsServise.createPost(post)
    }

    @Put(':id')
    async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
        return this.postsServise.replacePost(Number(id), post)
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string) {
        return this.postsServise.deletePost(Number(id))
    }
}