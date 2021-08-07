import { ignoreUndefinedFilters } from '../functions';
import { getUsersRepository } from '../repositories';

type params = {
  id?: string;
  name?: string;
  email?: string;
};

class ListUsersService {
  async execute({ id, name, email }: params) {
    const usersRepository = getUsersRepository();

    const filters = ignoreUndefinedFilters({ id, name, email });

    const users = await usersRepository.find({
      where: filters,
      relations: ['createdEvents', 'events'],
    });

    return users;
  }
}

export default ListUsersService;
