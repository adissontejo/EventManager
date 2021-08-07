import { getEventsRepository } from '../repositories';

type params = {
  userId: string;
  eventId: string;
};

class JoinEventService {
  async execute({ eventId, userId }: params) {
    const eventsRepository = getEventsRepository();

    await eventsRepository.addParticipant(eventId, userId);
  }
}

export default JoinEventService;
