import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1584965691785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "user" (
                id SERIAL NOT NULL,
                first_name VARCHAR NOT NULL,
                last_name VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP
            );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE IF EXISTS user`);
  }
}
