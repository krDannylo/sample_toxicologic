import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    token?: string;

}