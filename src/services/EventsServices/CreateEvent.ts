import { checkMissingParams } from '~/functions';
import { getEventsRepository } from '~/repositories';

type params = {
  name: string;
  description: string;
  date: string;
  auth: {
    userId: string;
  };
};

class CreateEvent {
  async execute({ name, description, date, auth }: params) {
    checkMissingParams({ name, description, date });

    const creator = {
      id: auth.userId,
    };

    const eventsRepository = getEventsRepository();

    try {
      const event = await eventsRepository.save({
        name,
        description,
        date,
        creator,
        participants: [creator],
      });

      return event;
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.match(/insert.*violates foreign key.*FK_user.*/)) {
          throw new Error('Invalid user.');
        }
      }

      throw err;
    }
  }
}

export default CreateEvent;
