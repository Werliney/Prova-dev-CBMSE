import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('person')
class Person {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    first_name: string;

    @Column()
    second_name: string;
}

export default Person;