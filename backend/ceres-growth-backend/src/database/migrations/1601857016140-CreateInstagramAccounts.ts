import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateInstagramAccounts1601857016140
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'instagram_users',
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
            length: '50',
          },
          {
            name: 'full_name',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'biography',
            type: 'varchar',
            isNullable: false,
            length: '150',
          },
          {
            name: 'connected_fb_page',
            type: 'varchar',
            isNullable: false,
            length: '1200',
          },
          {
            name: 'external_url',
            type: 'varchar',
            isNullable: false,
            length: '1200',
          },
          {
            name: 'business_email',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'is_business_account',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'is_private',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'is_verified',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'success',
            type: 'boolean',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('instagram_users');
  }
}
