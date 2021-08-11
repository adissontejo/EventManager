import { getRepository } from 'typeorm';

import { User } from '~/models';

const getUsersRepository = () => {
  return getRepository(User);
};

export default getUsersRepository;
