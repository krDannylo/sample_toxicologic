import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('sample')
export class Sample {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    codigo_amostra: string;

    @Column({type: 'float', default: 0})
    Cocaína: number;

    @Column({type: 'float', default: 0})
    Anfetamina: number;

    @Column({type: 'float', default: 0})
    Metanfetamina: number;

    @Column({type: 'float', default: 0})
    MDA: number;

    @Column({type: 'float', default: 0})
    MDMA: number;

    @Column({type: 'float', default: 0})
    THC: number;

    @Column({type: 'float', default: 0})
    Morfina: number;

    @Column({type: 'float', default: 0})
    Codeína: number;

    @Column({type: 'float', default: 0})
    Heroína: number;

    @Column({type: 'float', default: 0})
    Benzoilecgonina : number;

    @Column({type: 'float', default: 0})
    Cocaetileno: number;

    @Column({type: 'float', default: 0})
    Norcocaína: number;

    @Column()
    Amostra: boolean;
}