import { compare } from 'bcryptjs';

import { checkMissingParams } from '~/functions';
import { getUsersRepository } from '~/repositories';

type params = {
  userId: string;
  password: string;
};

class DeleteUser {
  async execute({ userId, password }: params) {
    checkMissingParams({ password });

    const usersRepository = getUsersRepository();

    const user = await usersRepository.findOne(userId, {
      select: ['password'],
    });

    if (!user) {
      throw new Error('Could not find user.');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password.');
    }

    await usersRepository.delete(userId);
  }
}

export default DeleteUser;
