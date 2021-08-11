import { Router } from 'express';

import { EventsController } from '~/controllers';

const eventsRouter = Router();

const eventsController = new EventsController();

eventsRouter.post('/', eventsController.create);

eventsRouter.delete('/', eventsController.delete);

eventsRouter.post('/join', eventsController.join);

eventsRouter.delete('/leave', eventsController.leave);

eventsRouter.get('/', eventsController.list);

eventsRouter.put('/', eventsController.update);

export default eventsRouter;
