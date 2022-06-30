/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity('posts')
export class Post {
    @PrimaryColumn({ nullable: false })
    id: number;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    content: string;

    @ManyToOne(() => User, user => user.posts)
    author: User;

    @Column({ nullable: true })
    likes: string;
}
