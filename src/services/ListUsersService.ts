import { ignoreUndefinedParams } from '../functions';
import { getUsersRepository } from '../repositories';

type params = {
  id?: string;
  name?: string;
  email?: string;
};

class ListUsersService {
  async execute({ id, name, email }: params) {
    const filters = ignoreUndefinedParams({ id, name, email });

    const usersRepository = getUsersRepository();

    const users = await usersRepository.find({
      where: filters,
      relations: ['createdEvents', 'events'],
    });

    return users;
  }
}

export default ListUsersService;
