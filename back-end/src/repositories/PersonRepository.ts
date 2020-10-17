import { EntityRepository, Repository} from 'typeorm';

import Person from '../models/Person';

@EntityRepository(Person)
class PersonRepository extends Repository<Person> {
    public async findPerson(id: string): Promise<Person | null> {
        const person = await this.findOne({
            where: { id },
        });

        return person || null;
    }
}

export default PersonRepository;