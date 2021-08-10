import { checkMissingParams, ignoreUndefinedParams } from '../functions';
import { getUsersRepository } from '../repositories';

type params = {
  id: string;
  name?: string;
  email?: string;
  password?: string;
};

class UpdateUserService {
  async execute({ id, name, email, password }: params) {
    checkMissingParams({ id });

    const newData = ignoreUndefinedParams({ name, email, password });

    const usersRepository = getUsersRepository();

    await usersRepository.update(id, newData);
  }
}

export default UpdateUserService;
