import { Router } from 'express';
import personRouter from './person.routes';

const routes = Router();

routes.use('/persons', personRouter);

export default routes;