import { checkMissingParams } from '~/functions';
import { getUsersRepository } from '~/repositories';

type params = {
  auth: {
    userId: string;
  };
  password: string;
};

class DeleteUser {
  async execute({ auth, password }: params) {
    checkMissingParams({ password });

    const usersRepository = getUsersRepository();

    const results = await usersRepository.deleteWithConfirmation(
      auth.userId,
      password
    );

    if (results.affected === 0) {
      throw new Error('Invalid user or password.');
    }
  }
}

export default DeleteUser;
