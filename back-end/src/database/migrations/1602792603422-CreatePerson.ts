import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreatePerson1602792603422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'person',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'first_name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'second_name',
                        type: 'varchar',
                        isNullable: false,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('person');
    }

}
