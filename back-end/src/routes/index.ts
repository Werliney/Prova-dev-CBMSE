import { Router } from 'express';
import personRouter from './person.routes';
import typeContactRouter from './typeContact.routes';
import contactPersonRouter from './contactPerson.routes';

const routes = Router();

routes.use('/persons', personRouter);
routes.use('/contacts', contactPersonRouter);
routes.use('/typeContacts', typeContactRouter);

export default routes;