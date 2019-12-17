import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class TimeZone {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{nullable:false})
    gmt: string;

    @Column('text',{nullable:false})
    region: string;
}