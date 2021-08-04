import { MigrationInterface, QueryRunner } from 'typeorm';

export default class SetupMigration1628109013102 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DROP EXTENSION IF NOT EXISTS "uuid-ossp"');
  }
}
