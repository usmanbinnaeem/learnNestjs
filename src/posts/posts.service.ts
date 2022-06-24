/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto'
import { UpdatePostDto } from "./dto/updatePost.dto";
import Post from './post.interface'

@Injectable()
export default class PostsService {
    private lastPostId = 0;
    private posts: Post[] = [];

    getAllposts() {
        return this.posts;
    }

    getPostbyId(id: number) {
        const post = this.posts.find(post => post.id === id)
        if (post) {
            return post
        }
        throw new HttpException('Post Not Found', HttpStatus.NOT_FOUND)
    }

    replacePost(id: number, post: UpdatePostDto) {
        const newPost = {
            id: ++this.lastPostId,
            ...post
        }
        const postIndex = this.posts.findIndex(post => post.id === id)
        if (postIndex > -1) {
            this.posts[postIndex] = newPost
            return post
        }
        throw new HttpException('Post Not Found', HttpStatus.NOT_FOUND)
    }

    createPost(post: CreatePostDto) {
        const newPost = {
            id: ++this.lastPostId,
            ...post
        }

        this.posts.push(newPost)
        return newPost
    }

    deletePost(id: number) {
        const postIndex = this.posts.findIndex(post => post.id === id)
        if (postIndex > -1) {
            this.posts.splice(postIndex, 1)
        } else {
            throw new HttpException('post Not Found', HttpStatus.NOT_FOUND)
        }
    }
}
