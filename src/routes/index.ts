import { Router } from 'express';

import eventsRouter from './eventsRouter';
import usersRouter from './usersRouter';

const routes = Router();

routes.use('/events', eventsRouter);

routes.use('/users', usersRouter);

export default routes;
