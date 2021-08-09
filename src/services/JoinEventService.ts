import { checkMissingParams } from '../functions';
import { getEventsRepository } from '../repositories';

type params = {
  userId: string;
  eventId: string;
};

class JoinEventService {
  async execute({ eventId, userId }: params) {
    try {
      checkMissingParams({ eventId, userId });

      const eventsRepository = getEventsRepository();

      await eventsRepository.addParticipant(eventId, userId);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.match(/insert.*violates foreign key.*FK_user.*/)) {
          throw new Error('User does not exist.');
        }

        if (err.message.match(/insert.*violates foreign key.*FK_event/)) {
          throw new Error('Event does not exist.');
        }

        if (err.message.match(/duplicate key value.*/)) {
          throw new Error('User has already joined.');
        }
      }

      throw err;
    }
  }
}

export default JoinEventService;
