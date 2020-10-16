import { getCustomRepository } from 'typeorm';

import Person from '../models/Person';
import PersonRepository from '../repositories/PersonRepository';

interface Request {
    first_name: string;
    second_name: string;
}

class CreatePersonService {
    public async execute({ first_name, second_name}: Request): Promise<Person> {
        const personRepository = getCustomRepository(PersonRepository);

        const person = personRepository.create({
            first_name,
            second_name,
        });

        await personRepository.save(person);

        return person;
    }
}

export default CreatePersonService;