import { checkMissingParams } from '~/functions';
import { getEventsRepository } from '~/repositories';

type params = {
  id: string;
  auth: {
    userId: string;
  };
};

class JoinEvent {
  async execute({ id, auth }: params) {
    checkMissingParams({ id });

    const eventsRepository = getEventsRepository();

    try {
      await eventsRepository.addParticipant(id, auth.userId);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.match(/insert.*violates foreign key.*FK_user.*/)) {
          throw new Error('Invalid user.');
        }

        if (err.message.match(/insert.*violates foreign key.*FK_event/)) {
          throw new Error('Invalid event.');
        }

        if (err.message.match(/duplicate key value.*/)) {
          throw new Error('User has already joined.');
        }
      }

      throw err;
    }
  }
}

export default JoinEvent;
