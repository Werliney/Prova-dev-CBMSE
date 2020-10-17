import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import Person from './Person';
import TypeContact from './TypeContact';

@Entity('contact_person')
class ContactPerson {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    contact: string;

    @Column()
    person_id: string;

    @ManyToOne(() => Person, { cascade: true })
    @JoinColumn({name: 'person_id'})
    person: Person;

    @Column()
    type_contact_id: string;

    @ManyToOne(() => TypeContact, {cascade: true })
    @JoinColumn({name: 'type_contact_id'})
    type_contact: TypeContact;
}

export default ContactPerson;