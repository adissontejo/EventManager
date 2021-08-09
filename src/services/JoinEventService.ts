import { checkMissingParams } from '../functions';
import { getEventsRepository } from '../repositories';

type params = {
  userId: string;
  eventId: string;
};

class JoinEventService {
  async execute({ eventId, userId }: params) {
    checkMissingParams({ eventId, userId });

    const eventsRepository = getEventsRepository();

    await eventsRepository.addParticipant(eventId, userId);
  }
}

export default JoinEventService;
