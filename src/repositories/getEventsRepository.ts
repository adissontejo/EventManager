import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

import { Event } from '../models';

@EntityRepository(Event)
class EventsRepository extends Repository<Event> {
  async addParticipant(eventId: string, userId: string) {
    const queryBuilder = this.createQueryBuilder();

    const event = await queryBuilder
      .relation('participants')
      .of(eventId)
      .add(userId);

    return event;
  }
}

const getEventsRepository = () => {
  return getCustomRepository(EventsRepository);
};

export default getEventsRepository;
