import { checkMissingParams } from '../functions';
import { getUsersRepository } from '../repositories';

type params = {
  userId: string;
};

class DeleteUserService {
  async execute({ userId }: params) {
    checkMissingParams({ userId });

    const usersRepository = getUsersRepository();

    await usersRepository.delete(userId);
  }
}

export default DeleteUserService;
