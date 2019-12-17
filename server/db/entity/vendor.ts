import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { plainToClass, Expose } from "class-transformer"

@Entity()
export class Vendor {
    @Expose()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column('int', { nullable: false })
    account_id: number;

    @Expose()
    @Column('text', { nullable: false })
    name: string;

    static toClass(data: Object) { return plainToClass(Vendor, data, { excludeExtraneousValues: true }) }
}