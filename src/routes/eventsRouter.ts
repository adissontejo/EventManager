import { Router } from 'express';

import {
  CreateEventController,
  DeleteEventController,
  JoinEventController,
  LeaveEventController,
  ListEventsController,
  UpdateEventController,
} from '../controllers';

const eventsRouter = Router();

const createEvent = new CreateEventController();

const deleteEvent = new DeleteEventController();

const joinEvent = new JoinEventController();

const leaveEvent = new LeaveEventController();

const listEvents = new ListEventsController();

const updateEvent = new UpdateEventController();

eventsRouter.post('/', createEvent.handle);

eventsRouter.delete('/', deleteEvent.handle);

eventsRouter.post('/join', joinEvent.handle);

eventsRouter.delete('/leave', leaveEvent.handle);

eventsRouter.get('/', listEvents.handle);

eventsRouter.put('/', updateEvent.handle);

export default eventsRouter;
