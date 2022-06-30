/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostsModule } from './modules/post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'nest_api',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PostsModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
