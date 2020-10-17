import { getCustomRepository } from 'typeorm';

import TypeContact from '../models/TypeContact';
import TypeContactRepository from '../repositories/TypeContactRepository';

interface Request {
    name: string;
}

class CreateTypeContactService {
    public async execute({ name }: Request): Promise<TypeContact> {
        const typeContactRepository = getCustomRepository(TypeContactRepository);

        const typeContact = typeContactRepository.create({
            name,
        });

        await typeContactRepository.save(typeContact);

        return typeContact;
    }
}


export default CreateTypeContactService;