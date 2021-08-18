import { checkMissingParams } from '~/functions';
import { getEventsRepository } from '~/repositories';

type params = {
  id: string;
  auth: {
    userId: string;
  };
};

class LeaveEvent {
  async execute({ id, auth }: params) {
    checkMissingParams({ id });

    const eventsRepository = getEventsRepository();

    await eventsRepository.removeParticipant(id, auth.userId);
  }
}

export default LeaveEvent;
