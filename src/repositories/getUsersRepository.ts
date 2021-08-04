import { getRepository } from 'typeorm';

import { User } from '../entities';

const getUsersRepository = () => {
  return getRepository(User);
};

export default getUsersRepository;
