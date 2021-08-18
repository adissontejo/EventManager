import { ignoreUndefinedParams } from '~/functions';
import { getUsersRepository } from '~/repositories';

type updateParams = {
  name?: string;
  email?: string;
};

type params = updateParams & {
  auth: {
    userId: string;
  };
  password?: string;
  oldPassword?: string;
};

class UpdateUser {
  async execute({ auth, name, email, password, oldPassword }: params) {
    const newData = ignoreUndefinedParams<updateParams>({
      name,
      email,
    });

    const usersRepository = getUsersRepository();

    if (password) {
      if (!oldPassword) {
        throw new Error('Missing param(s): oldPassword.');
      }

      const results = await usersRepository.updateWithEncrypt(
        auth.userId,
        password,
        oldPassword,
        newData
      );

      if (results.affected === 0) {
        throw new Error('Invalid user or password.');
      }

      return;
    }

    const results = await usersRepository.update(auth.userId, newData);

    if (results.affected === 0) {
      throw new Error('Invalid user.');
    }
  }
}

export default UpdateUser;
