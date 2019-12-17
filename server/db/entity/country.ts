import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{nullable:false})
    name: string;

    @Column('int',{nullable:false})
    currency_id: number;
}