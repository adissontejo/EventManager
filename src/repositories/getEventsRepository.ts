import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

import { Event } from '../models';

@EntityRepository(Event)
class EventsRepository extends Repository<Event> {
  async addParticipant(eventId: string, userId: string) {
    const queryBuilder = this.createQueryBuilder();

    await queryBuilder.relation('participants').of(eventId).add(userId);
  }

  async removeParticipant(eventId: string, userId: string) {
    const queryBuilder = this.createQueryBuilder();

    await queryBuilder.relation('participants').of(eventId).remove(userId);
  }
}

const getEventsRepository = () => {
  return getCustomRepository(EventsRepository);
};

export default getEventsRepository;
