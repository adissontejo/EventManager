import { Request, Response } from 'express';

import { UpdateEventService } from '../services';

class UpdateEventController {
  async handle(request: Request, response: Response) {
    const updateEvent = new UpdateEventService();

    await updateEvent.execute(request.body);

    return response.json({
      message: 'Event has been succesfully updated.',
    });
  }
}

export default UpdateEventController;
