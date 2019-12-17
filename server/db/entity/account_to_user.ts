import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class AccountToUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int',{nullable:false})
    account_id: number;

    @Column('int',{nullable:false})
    user_id: string;
    
    @Column('text',{nullable:false})
    role: string;
    
    @Column('date',{nullable:false})
    creation_date: Date;

    fromMap(data : Map<String, any>) {
        this.id = data['id'];
    }
}