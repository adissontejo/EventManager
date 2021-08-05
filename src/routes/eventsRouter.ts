import { Router } from 'express';

import { ListEventsController } from '../controllers';

const eventsRouter = Router();

const listEvents = new ListEventsController();

eventsRouter.get('/', listEvents.handle);

export default eventsRouter;
