import { compare, hash } from 'bcryptjs';

import { checkMissingParams, ignoreUndefinedParams } from '~/functions';
import { getUsersRepository } from '~/repositories';

type updateParams = {
  name?: string;
  email?: string;
  password: string;
};

type params = updateParams & {
  userId: string;
  oldPassword: string;
};

class UpdateUser {
  async execute({ userId, name, email, password, oldPassword }: params) {
    const newData = ignoreUndefinedParams<updateParams>({
      name,
      email,
      password,
    });

    const usersRepository = getUsersRepository();

    if (password) {
      if (!oldPassword) {
        throw new Error('Missing param: oldPassword.');
      }

      const user = await usersRepository.findOne(userId, {
        select: ['password'],
      });

      const passwordMatch = await compare(oldPassword, user.password);

      if (!passwordMatch) {
        throw new Error('Old password does not match.');
      }

      newData.password = await hash(password, 8);
    }

    await usersRepository.update(userId, newData);
  }
}

export default UpdateUser;
