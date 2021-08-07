import { Request, Response } from 'express';

import { CreateEventService } from '../services';

class CreateEventController {
  async handle(request: Request, response: Response) {
    const createEvent = new CreateEventService();

    const event = await createEvent.execute(request.body);

    return response.json(event);
  }
}

export default CreateEventController;
