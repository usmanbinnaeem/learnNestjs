/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostsModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from "./post/entities/post.entity";

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'nest_api',
      entities: [Post],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
