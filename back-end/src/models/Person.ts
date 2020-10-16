import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import ContactPerson from './ContactPerson';

@Entity('person')
class Person {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    first_name: string;

    @Column()
    second_name: string;

    @OneToMany(() => ContactPerson, contact_person => contact_person.person)
    contact_person: ContactPerson[];

}

export default Person;