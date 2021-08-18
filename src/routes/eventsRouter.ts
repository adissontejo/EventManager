import { Router } from 'express';

import { EventsController } from '~/controllers';
import { ensureAuthenticated } from '~/middlewares';

const eventsRouter = Router();

const eventsController = new EventsController();

eventsRouter.post('/', ensureAuthenticated, eventsController.create);

eventsRouter.delete('/', ensureAuthenticated, eventsController.delete);

eventsRouter.post('/join', ensureAuthenticated, eventsController.join);

eventsRouter.delete('/leave', ensureAuthenticated, eventsController.leave);

eventsRouter.get('/', eventsController.list);

eventsRouter.put('/', ensureAuthenticated, eventsController.update);

export default eventsRouter;
