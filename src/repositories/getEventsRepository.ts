import { getRepository } from 'typeorm';

import { Event } from '../entities';

const getEventsRepository = () => {
  return getRepository(Event);
};

export default getEventsRepository;
