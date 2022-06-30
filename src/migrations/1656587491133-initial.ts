import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1656587491133 implements MigrationInterface {
    name = 'initial1656587491133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL DEFAULT 'John Doe',
                "password" integer NOT NULL,
                "bio" character varying NOT NULL DEFAULT 'Please Update Your Bio Here',
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "posts" (
                "id" integer NOT NULL,
                "title" character varying NOT NULL,
                "content" character varying NOT NULL,
                "likes" character varying,
                "authorId" integer,
                CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "posts"
            ADD CONSTRAINT "FK_c5a322ad12a7bf95460c958e80e" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "posts" DROP CONSTRAINT "FK_c5a322ad12a7bf95460c958e80e"
        `);
        await queryRunner.query(`
            DROP TABLE "posts"
        `);
        await queryRunner.query(`
            DROP TABLE "users"
        `);
    }

}
