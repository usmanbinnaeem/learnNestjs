/* eslint-disable prettier/prettier */
import {
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
    IsNumber,
} from 'class-validator';

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
}