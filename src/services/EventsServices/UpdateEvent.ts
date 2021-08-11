import { checkMissingParams, ignoreUndefinedParams } from '~/functions';
import { getEventsRepository } from '~/repositories';

type params = {
  id: string;
  name?: string;
  description?: string;
  date?: Date;
};

class UpdateEvent {
  async execute({ id, name, description, date }: params) {
    checkMissingParams({ id });

    const newData = ignoreUndefinedParams<params>({
      id,
      name,
      description,
      date,
    });

    const eventsRepository = getEventsRepository();

    await eventsRepository.update(id, newData);
  }
}

export default UpdateEvent;
