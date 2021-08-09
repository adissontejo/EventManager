import { checkMissingParams } from '../functions';
import { getEventsRepository } from '../repositories';

type params = {
  eventId: string;
};

class DeleteEventService {
  async execute({ eventId }: params) {
    checkMissingParams({ eventId });

    const eventsRepository = getEventsRepository();

    await eventsRepository.delete(eventId);
  }
}

export default DeleteEventService;
