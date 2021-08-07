import { Request, Response } from 'express';

import { JoinEventService } from '../services';

class JoinEventController {
  async handle(request: Request, response: Response) {
    const joinEvent = new JoinEventService();

    await joinEvent.execute(request.body);

    return response.json({
      message: 'Suscessfully joined.',
    });
  }
}

export default JoinEventController;
