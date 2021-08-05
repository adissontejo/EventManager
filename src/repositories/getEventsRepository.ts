import { getRepository } from 'typeorm';

import { Event } from '../models';

const getEventsRepository = () => {
  return getRepository(Event);
};

export default getEventsRepository;
