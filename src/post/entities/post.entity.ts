/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('posts')
export class Post {
    @PrimaryColumn({ nullable: false })
    id: number;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    content: string;
}
