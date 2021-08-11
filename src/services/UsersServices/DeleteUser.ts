import { checkMissingParams } from '~/functions';
import { getUsersRepository } from '~/repositories';

type params = {
  id: string;
};

class DeleteUser {
  async execute({ id }: params) {
    checkMissingParams({ id });

    const usersRepository = getUsersRepository();

    await usersRepository.delete(id);
  }
}

export default DeleteUser;
