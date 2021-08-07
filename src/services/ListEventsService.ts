import { ignoreUndefinedFilters } from '../functions';
import { getEventsRepository } from '../repositories';

type params = {
  id?: string;
  name?: string;
  description?: string;
  date?: Date;
};

class ListUsersService {
  async execute({ id, name, description, date }: params) {
    const eventsRepository = getEventsRepository();

    const filters = ignoreUndefinedFilters({ id, name, description, date });

    const events = await eventsRepository.find({
      where: filters,
      relations: ['creator', 'participants'],
    });

    return events;
  }
}

export default ListUsersService;
