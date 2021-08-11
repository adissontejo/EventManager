import { checkMissingParams } from '~/functions';
import { getEventsRepository } from '~/repositories';

type params = {
  eventId: string;
  userId: string;
};

class LeaveEvent {
  async execute({ eventId, userId }: params) {
    checkMissingParams({ eventId, userId });

    const eventsRepository = getEventsRepository();

    await eventsRepository.removeParticipant(eventId, userId);
  }
}

export default LeaveEvent;
