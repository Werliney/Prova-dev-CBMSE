import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ContactPersonRepository from '../repositories/ContactPersonRepository';
import CreatePersonContactService from '../services/CreatePersonContactService'

const contactPersonRouter = Router();


contactPersonRouter.get('/', async (request, response) => {
    const contactPersonRepository = getCustomRepository(ContactPersonRepository);

    const contacts = await contactPersonRepository.find({ relations: ["type_contact", "person"]});

    return response.json(contacts);
});

contactPersonRouter.post('/', async (request, response) => {
    try {
        const { person_id, type_contact, contact} = request.body;

        const createContactPerson = new CreatePersonContactService();

        const contactPerson = await createContactPerson.execute({
            person_id,
            type_contact,
            contact,
        });

        return response.json(contactPerson);
    } catch (error) {
        return response.json({ error: 'Falha na criação de uma novo contato de uma'});
    }
});

contactPersonRouter.put('/:person_id', async (request, response) => {

        const { person_id } = request.params;
    
        const { contact } = request.body;

        const contactPersonRepository = getCustomRepository(ContactPersonRepository);

        const contactPerson = await contactPersonRepository.findOne({where: {person_id}});

        if(!contactPerson) {
          throw new Error('contactPerson not found')
        }
        
        contactPerson.contact = contact;
        
        await contactPersonRepository.save(contactPerson)
        return response.json(contactPerson)
    
});

contactPersonRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;

    const contactPersonRepository = getCustomRepository(ContactPersonRepository);


    await contactPersonRepository.delete(id);

    return response.status(204).send();
});



export default contactPersonRouter;