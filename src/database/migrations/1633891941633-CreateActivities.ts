import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivities1633891941633 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"activities",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "activity_date",
                        type: "timestamp"
                    },
                    {
                        name: "grade",
                        type: "decimal"
                    },
                    {
                        name: "course_unit_id",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                // foreignKeys: [
                //     {
                //         name: 'activity_course_unity',
                //         referencedTableName: 'course_units',
                //         referencedColumnNames: ['id'],
                //         columnNames: ['course_unit_id']
                //     }
                // ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activities")
    }

}
