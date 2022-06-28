/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostsModule } from './post.module';
import { PostsService } from './post.service';
import { PostsController } from './post.controller';

@Module({
    imports: [PostsModule],
    providers: [PostsService],
    controllers: [PostsController]
})
export class PostHttpModule { }
