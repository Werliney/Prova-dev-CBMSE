import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('type_contacts')
class TypeContact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}

export default TypeContact;