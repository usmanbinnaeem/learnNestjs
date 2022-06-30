/* eslint-disable prettier/prettier */
import {
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
    IsNumber,
} from 'class-validator';
import { Post } from 'src/modules/post/entities/post.entity';
export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    password: number;

    @IsString()
    @MinLength(200)
    @MaxLength(4000)
    bio: string;

    @IsString()
    @IsNotEmpty()
    posts: Post[];
}