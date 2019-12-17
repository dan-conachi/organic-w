import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Currency {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { nullable: false })
    name: string;

    @Column('text', { nullable: false })
    code: string;

    @Column('text', { nullable: false })
    symbol: string;
}