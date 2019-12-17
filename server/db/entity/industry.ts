import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Industry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{nullable:false})
    name: string;
}