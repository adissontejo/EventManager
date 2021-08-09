import { Request, Response } from 'express';

import { DeleteEventService } from '../services';

class DeleteEventController {
  async handle(request: Request, response: Response) {
    const deleteEvent = new DeleteEventService();

    await deleteEvent.execute(request.body);

    return response.json({
      message: 'Event has been successfully deleted',
    });
  }
}

export default DeleteEventController;
