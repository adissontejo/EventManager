import { getEventsRepository } from '../repositories';

type params = {
  name: string;
  description: string;
  date: string;
  creatorId: string;
};

class CreateEventService {
  async execute({ name, description, date, creatorId }: params) {
    const eventsRepository = getEventsRepository();

    const creator = {
      id: creatorId,
    };

    const event = await eventsRepository.save({
      name,
      description,
      date: new Date(date),
      creator,
      participants: [creator],
    });

    return event;
  }
}

export default CreateEventService;
