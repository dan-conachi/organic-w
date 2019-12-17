import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { plainToClass, classToPlain, Expose } from "class-transformer"

@Entity()
export class Address {
    @Expose()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column('text', { nullable: false })
    address1: string;

    @Expose()
    @Column('text', { nullable: true })
    address2: string;

    @Expose()
    @Column('text', { nullable: false })
    city: string;

    @Expose()
    @Column('text', { nullable: false })
    province: string;

    @Expose()
    @Column('text', { nullable: false })
    postal_code: string;

    @Expose()
    @Column('int', { nullable: false })
    country_id: number;

    fromClass() { return classToPlain(this) }

    static toClass(data: Object) { return plainToClass(Address, data, { excludeExtraneousValues: true }) }
}