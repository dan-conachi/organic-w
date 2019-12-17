import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { plainToClass, Expose } from "class-transformer"

@Entity()
export class Tax {
    @Expose()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column('int', { nullable: false })
    account_id: number;

    @Expose()
    @Column('text', { nullable: false })
    name: string;

    @Expose()
    @Column("decimal", { precision: 4, scale: 2 })
    rate: number;

    @Expose()
    @Column('bool', { nullable: false })
    removed: boolean;
    
    @Expose()
    @Column('text', { nullable: true })
    registration_number: string;

    static toClass(data: Object) { return plainToClass(Tax, data, { excludeExtraneousValues: true }) }
}