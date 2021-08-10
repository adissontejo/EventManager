import { checkMissingParams, ignoreUndefinedParams } from '../functions';
import { getEventsRepository } from '../repositories';

type params = {
  id: string;
  name?: string;
  description?: string;
  date?: Date;
};

class UpdateEventService {
  async execute({ id, name, description, date }: params) {
    checkMissingParams({ id });

    const newData = ignoreUndefinedParams({ name, description, date });

    const eventsRepository = getEventsRepository();

    await eventsRepository.update(id, newData);
  }
}

export default UpdateEventService;
