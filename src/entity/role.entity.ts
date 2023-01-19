import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permission } from "./permission.entity";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @ManyToMany(()=> Permission)
    @JoinTable({
        name: 'rolePermission',
        joinColumn :  { name: 'roleId', referencedColumnName:'id'},
        inverseJoinColumn: {name: 'permissionId', referencedColumnName: 'id'}
    })
    permission: Permission[];
}