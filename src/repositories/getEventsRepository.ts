import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

import { Event } from '../models';

@EntityRepository(Event)
class EventsRepository extends Repository<Event> {
  async addParticipant(eventId: string, userId: string) {
    try {
      const queryBuilder = this.createQueryBuilder();

      await queryBuilder.relation('participants').of(eventId).add(userId);
    } catch (e) {
      if (e instanceof Error) {
        if (e.message.match(/insert.*violates foreign key.*FK_user.*/)) {
          throw new Error('User does not exist.');
        }

        if (e.message.match(/insert.*violates foreign key.*FK_event/)) {
          throw new Error('Event does not exist.');
        }

        if (e.message.match(/duplicate key value.*/)) {
          throw new Error('User has already joined.');
        }
      }

      throw e;
    }
  }

  async removeParticipant(eventId: string, userId: string) {
    try {
      const queryBuilder = this.createQueryBuilder();

      await queryBuilder.relation('participants').of(eventId).remove(userId);
    } catch (e) {
      console.log('in');

      throw e;
    }
  }
}

const getEventsRepository = () => {
  return getCustomRepository(EventsRepository);
};

export default getEventsRepository;
