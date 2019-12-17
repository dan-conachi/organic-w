import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{nullable:false})
    name: string;
}