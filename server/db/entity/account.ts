import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { classToPlain, plainToClass, Expose } from "class-transformer"

import { Address } from "./address"

@Entity()
export class Account {
    @Expose()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column('int', { nullable: false })
    user_id: number;

    @Expose()
    @Column('text', { nullable: true })
    domain: string;

    @Expose()
    @Column('bool', { nullable: false })
    personal: boolean;

    @Expose()
    @Column('date', { nullable: false })
    creation_date: Date;

    @Expose()
    @Column('date', { nullable: false })
    last_modified_date: Date;

    @Expose()
    @Column('text', { nullable: false })
    date_format_type: string;

    @Expose()
    @Column('text')
    business_name: string;

    @Expose()
    @Column('text')
    email: string;

    @Expose()
    @Column('text')
    phone: string;

    @Expose()
    @Column('text')
    mobile_phone: string;

    @Expose()
    @Column('text')
    fax: string;

    @Expose()
    @Column('text')
    url: string;

    @Expose()
    @Column('text')
    color: string;

    @Expose()
    @Column('text')
    logo: string;

    @Column('int')
    company_type_id: number;

    @Column('int')
    industry_id: number;

    @Column('int')
    currency_id: number;

    @Column('int')
    country_id: number;

    @Column('int')
    time_zone_id: number;

    @OneToOne(type => Address, { cascade: true, eager: true })
    @JoinColumn()
    address: Address;

    fromClass() { return classToPlain(this) }

    static toClass(data: Object) { return plainToClass(Account, data, { excludeExtraneousValues: true }) }
}