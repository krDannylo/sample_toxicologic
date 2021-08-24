import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624398391705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sample",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                    },
                    {
                        name: "codigo_amostra",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "Cocaína",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "Anfetamina",
                        type: "float",
                        default: 0,
                    },                    
                    {
                        name: "Metanfetamina",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "MDA",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "MDMA",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "THC",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "Morfina",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "Codeína",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "Heroína",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "Benzoilecgonina",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "Cocaetileno",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "Norcocaína",
                        type: "float",
                        default: 0,
                    },
                    {
                        name: "Amostra",
                        type: "boolean",
                        isNullable: true,
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sample");
    }
}