import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateFacebookUsers1602866624062 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'facebook_users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            isNullable: false,
            length: '30',
          },
          {
            name: 'username',
            type: 'varchar',
            isNullable: false,
            length: '100',
          },
          {
            name: 'full_name',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
        ],
      }),
    );
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('facebook_users');
    }

}
