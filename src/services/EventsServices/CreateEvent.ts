import { checkMissingParams } from '~/functions';
import { getEventsRepository } from '~/repositories';

type params = {
  name: string;
  description: string;
  date: string;
  creatorId: string;
};

class CreateEvent {
  async execute({ name, description, date, creatorId }: params) {
    checkMissingParams({ name, description, date, creatorId });

    const eventsRepository = getEventsRepository();

    const creator = {
      id: creatorId,
    };

    const event = await eventsRepository.save({
      name,
      description,
      date,
      creator,
      participants: [creator],
    });

    return event;
  }
}

export default CreateEvent;
