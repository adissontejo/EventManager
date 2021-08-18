import { Request, Response } from 'express';

import {
  CreateEventService,
  DeleteEventService,
  JoinEventService,
  LeaveEventService,
  ListEventsService,
  UpdateEventService,
} from '~/services';

class EventsController {
  async create(req: Request, res: Response) {
    const createEvent = new CreateEventService();

    const event = await createEvent.execute({ ...res.locals, ...req.body });

    return res.json(event);
  }

  async delete(req: Request, res: Response) {
    const deleteEvent = new DeleteEventService();

    await deleteEvent.execute({ ...res.locals, ...req.body });

    return res.json({ message: 'Event has been succesfully deleted.' });
  }

  async join(req: Request, res: Response) {
    const joinEvent = new JoinEventService();

    await joinEvent.execute({ ...res.locals, ...req.body });

    return res.json({ message: 'User has succesfully joined.' });
  }

  async leave(req: Request, res: Response) {
    const leaveEvent = new LeaveEventService();

    await leaveEvent.execute({ ...res.locals, ...req.body });

    return res.json({ message: 'User has succesfully left.' });
  }

  async list(req: Request, res: Response) {
    const listEvents = new ListEventsService();

    const events = await listEvents.execute({ ...req.body, ...req.query });

    return res.json(events);
  }

  async update(req: Request, res: Response) {
    const updateEvent = new UpdateEventService();

    await updateEvent.execute({ ...res.locals, ...req.body });

    return res.json({ message: 'Event has been succesfully updated.' });
  }
}

export default EventsController;
