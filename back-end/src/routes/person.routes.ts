import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import PersonRepository from '../repositories/PersonRepository';
import CreatePersonService from '../services/CreatePersonService';


const personRouter = Router();

personRouter.get('/', async (request, response) => {
    const personRepository = getCustomRepository(PersonRepository);
    const persons =  await personRepository.find();

    return response.json(persons);
});

personRouter.post('/', async (request, response) => {
    try {
        const { first_name, second_name} = request.body;

        const createPerson = new CreatePersonService();

        const person = await createPerson.execute({
            first_name,
            second_name,
        });

        return response.json(person);
    } catch (error) {
        return response.json({ error: 'Falha na criação de uma nova pessoa'});
    }
});



export default personRouter;