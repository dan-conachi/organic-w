import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class AppUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{nullable:false})
    email: string;

    @Column('text',{nullable:false})
    password: string;

    @Column('text',{nullable:false})
    first_name: string;

    @Column('text',{nullable:true})
    last_name: string;

    @Column('bool',{nullable:false})
    super_user: boolean;

    @Column('int',{nullable:true})
    subscriber: number;

    @Column('date',{nullable:true})
    creation_date: Date;

    @Column('date',{nullable:true})
    last_modified_date: Date;

    @Column('text',{nullable:true})
    confirmation_hashcode: string;

    @Column('bool',{nullable:false, default: false})
    enabled: boolean;
}