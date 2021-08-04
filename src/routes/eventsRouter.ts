import { Request, Response, Router } from 'express';

import { getEventsRepository } from '../repositories';

const eventsRouter = Router();

eventsRouter.get('/', async (req: Request, res: Response) => {
  const eventsRepository = getEventsRepository();

  const events = await eventsRepository.find();

  return res.json(events);
});

export default eventsRouter;
