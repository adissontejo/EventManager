import { Request, Response } from 'express';

import { ListEventsService } from '../services';

class ListEventsController {
  async handle(request: Request, response: Response) {
    const listEvents = new ListEventsService();

    const events = await listEvents.execute(request.body);

    return response.json(events);
  }
}

export default ListEventsController;
