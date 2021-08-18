import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddPGCrypto1628727639352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS pgcrypto');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION pgcrypto');
  }
}
