/* eslint-disable prettier/prettier */
import {
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
    IsNumber,
} from 'class-validator';
import { User } from '../../user/entities/user.entity'

export class CreatePostDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @MinLength(200)
    @MaxLength(4000)
    content: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: User;

    @IsString()
    @IsNotEmpty()
    likes: string;
}