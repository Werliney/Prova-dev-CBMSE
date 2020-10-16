import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import ContactPerson from './ContactPerson';

@Entity('type_contacts')
class TypeContact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => ContactPerson, contact_person => contact_person.type_contact)
    contact_person: ContactPerson[];
}

export default TypeContact;