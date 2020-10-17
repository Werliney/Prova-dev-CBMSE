import { EntityRepository, Repository} from 'typeorm';

import TypeContact from '../models/TypeContact';

@EntityRepository(TypeContact)
class TypeContactRepository extends Repository<TypeContact> {
    
}

export default TypeContactRepository;