import { EntityRepository, Repository} from 'typeorm';

import ContactPerson from '../models/ContactPerson';

@EntityRepository(ContactPerson)
class ContactPersonRepository extends Repository<ContactPerson> {
    public async findContactPerson(contact: string): Promise<ContactPerson | null> {
        const person = await this.findOne({
            where: { contact },
        });

        return person || null;
    }
}

export default ContactPersonRepository;