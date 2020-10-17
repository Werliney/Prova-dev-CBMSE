import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateTypeContactService from '../services/CreateTypeContactService';
import typeContactRepository from '../repositories/TypeContactRepository';
import TypeContactRepository from '../repositories/TypeContactRepository';

const typeContactRouter = Router();


typeContactRouter.get('/', async (request, response) => {
    const typeContactRepository =  getCustomRepository(TypeContactRepository);

    const typeContacts = await typeContactRepository.find();

    return response.json(typeContacts);
});

typeContactRouter.post('/', async (request, response) => {
    try {
        const { name } = request.body;

        const createTypeContact = new CreateTypeContactService();

        const typeContact = await createTypeContact.execute({
            name,
        });

        return response.json(typeContact);
    } catch (error) {
        return response.json({ error: 'Falha na criação de uma novo contato'});
    }
});


export default typeContactRouter;