import { Router } from 'express';

import {
  CreateEventController,
  JoinEventController,
  ListEventsController,
} from '../controllers';

const eventsRouter = Router();

const createEvent = new CreateEventController();

const joinEvent = new JoinEventController();

const listEvents = new ListEventsController();

eventsRouter.post('/', createEvent.handle);

eventsRouter.post('/join', joinEvent.handle);

eventsRouter.get('/', listEvents.handle);

export default eventsRouter;
