import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class PermissionToRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int',{nullable:false})
    role_id: number;

    @Column('int',{nullable:false})
    permission_id: number;
}