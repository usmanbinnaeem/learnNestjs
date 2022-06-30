/* eslint-disable prettier/prettier */
import { Post } from "../../post/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, default: 'John Doe' })
    name: string;

    @Column({ nullable: false })
    password: number;

    @Column({ nullable: false, default: 'Please Update Your Bio Here' })
    bio: string;

    @OneToMany(() => Post, post => post.author)
    posts: Post[];
}
