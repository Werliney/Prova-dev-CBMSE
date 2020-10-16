import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddForeignKeysToContactPerson1602854951194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('contact_person', new TableColumn({
            name: 'person_id',
            type: 'varchar',
            isNullable: true,
        }),
        );

        await queryRunner.addColumn('contact_person', new TableColumn({
            name: 'type_contact_id',
            type: 'varchar',
            isNullable: true,
        }),
        );

        await queryRunner.createForeignKey('contact_person', new TableForeignKey({
            name: 'PersonContact',
            columnNames: ['person_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'person',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'   
        }));

        await queryRunner.createForeignKey('contact_person', new TableForeignKey({
            name: 'TypeContactPerson',
            columnNames: ['type_contact_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'type_contacts',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'   
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('contact_person', 'TypeContactPerson');

        await queryRunner.dropForeignKey('contact_person', 'PersonContact');

        await queryRunner.dropColumn('contact_person', 'type_contact_id');

        await queryRunner.dropColumn('contact_person', 'person_id');
    }

}
