import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CompanyType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { nullable: false })
    name: string;
}