/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepositry: Repository<User>
  ) { }

  createPost(createUserDto: CreateUserDto) {
    return this.userRepositry.save(createUserDto)
  }

  async findAll() {
    return await this.userRepositry.find();
  }

  async findOne(id: number) {
    return await this.userRepositry.findOneBy({ id });
  }

  async updatePost(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepositry.update({ id }, updateUserDto);
  }

  async removePost(id: number) {
    return await this.userRepositry.delete({ id });
  }

  async getUsers() {
    return await this.userRepositry.find()
  }

  async getUserbyName(id: number, name: string) {
    const user = await this.userRepositry.findOneBy({ id })
    if (user.name === name) {
      return user;
    }
  }
}
