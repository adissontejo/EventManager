import { Router } from 'express';

import {
  CreateEventController,
  DeleteEventController,
  JoinEventController,
  LeaveEventController,
  ListEventsController,
} from '../controllers';

const eventsRouter = Router();

const createEvent = new CreateEventController();

const deleteEvent = new DeleteEventController();

const joinEvent = new JoinEventController();

const leaveEvent = new LeaveEventController();

const listEvents = new ListEventsController();

eventsRouter.post('/', createEvent.handle);

eventsRouter.delete('/', deleteEvent.handle);

eventsRouter.post('/join', joinEvent.handle);

eventsRouter.delete('/leave', leaveEvent.handle);

eventsRouter.get('/', listEvents.handle);

export default eventsRouter;
