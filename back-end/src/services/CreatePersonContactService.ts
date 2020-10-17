import { getCustomRepository } from 'typeorm';

import ContactPerson from '../models/ContactPerson';
import ContactPersonRepository from '../repositories/ContactPersonRepository';

interface Request {
    person_id: string;
    type_contact: {
        name: string;
    },
    contact: string;
}

class CreatePersonContactService {
    public async execute({ person_id, type_contact, contact}: Request): Promise<ContactPerson> {

        const contactPersonRepository = getCustomRepository(ContactPersonRepository);

        const findContact = await contactPersonRepository.findContactPerson(contact);

        if (findContact) {
            throw Error('Esse contato já existe');
        }

        const contactPerson = contactPersonRepository.create({
            person_id,
            type_contact,
            contact,
        });

        await contactPersonRepository.save(contactPerson);

        return contactPerson;
    }
}

export default CreatePersonContactService;