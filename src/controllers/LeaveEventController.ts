import { Request, Response } from 'express';

import { LeaveEventService } from '../services';

class LeaveEventController {
  async handle(request: Request, response: Response) {
    const leaveEvent = new LeaveEventService();

    await leaveEvent.execute(request.body);

    return response.json({
      message: 'User has successfully left.',
    });
  }
}

export default LeaveEventController;
