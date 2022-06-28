/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/createPost.dto'
import { UpdatePostDto } from "./dto/updatePost.dto";
import Postt from './post.interface'
import { Post } from './entities/post.entity'
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ) { }

    private posts: Postt[] = [];


    async getAllposts() {
        const res = await this.postRepository.find();
        return res
    }

    async getPostbyId(id: number) {
        const post = await this.postRepository.findOneBy({ id })
        if (post) {
            return post
        }
        throw new HttpException('Post Not Found', HttpStatus.NOT_FOUND)
    }

    async replacePost(id: number, post: UpdatePostDto) {
        await this.postRepository.update(id, post);
        const updatedPost = await this.postRepository.findOneBy({ id });
        if (updatedPost) {
            return updatedPost
        }
        throw new HttpException('Post Not Found', HttpStatus.NOT_FOUND)
    }

    async createPost(post: CreatePostDto) {
        console.log("Service ======> ", post);

        const newPost = await this.postRepository.create(post)
        await this.postRepository.save(newPost)
        return newPost
    }

    async deletePost(id: number) {
        const deleteResponse = await this.postRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new HttpException('post Not Found', HttpStatus.NOT_FOUND)
        }
    }
}
