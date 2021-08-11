import { ignoreUndefinedParams } from '~/functions';
import { getEventsRepository } from '~/repositories';

type params = {
  id?: string;
  name?: string;
  description?: string;
  date?: Date;
};

class ListEvents {
  async execute({ id, name, description, date }: params) {
    const filters = ignoreUndefinedParams<params>({
      id,
      name,
      description,
      date,
    });

    const eventsRepository = getEventsRepository();

    const events = await eventsRepository.find({
      where: filters,
      relations: ['creator', 'participants'],
    });

    return events;
  }
}

export default ListEvents;
