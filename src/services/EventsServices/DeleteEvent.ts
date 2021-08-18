import { checkMissingParams } from '~/functions';
import { getEventsRepository } from '~/repositories';

type params = {
  id: string;
  auth: {
    userId: string;
  };
};

class DeleteEvent {
  async execute({ id, auth }: params) {
    checkMissingParams({ id });

    const eventsRepository = getEventsRepository();

    const results = await eventsRepository.delete({
      id,
      creator: {
        id: auth.userId,
      },
    });

    if (results.affected === 0) {
      throw new Error('Invalid user or event.');
    }
  }
}

export default DeleteEvent;
