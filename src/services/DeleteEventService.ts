import { checkMissingParams } from '../functions';
import { getEventsRepository } from '../repositories';

type params = {
  id: string;
};

class DeleteEventService {
  async execute({ id }: params) {
    checkMissingParams({ id });

    const eventsRepository = getEventsRepository();

    await eventsRepository.delete(id);
  }
}

export default DeleteEventService;
