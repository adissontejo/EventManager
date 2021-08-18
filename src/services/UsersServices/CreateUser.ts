import { checkMissingParams } from '~/functions';
import { getUsersRepository } from '~/repositories';

type restParams = {
  name: string;
  email: string;
};

type params = restParams & {
  password: string;
};

class CreateUser {
  async execute({ name, email, password }: params) {
    checkMissingParams({ name, email, password });

    const usersRepository = getUsersRepository();

    try {
      const user = await usersRepository.createWithEncrypt(password, {
        name,
        email,
      });

      return user;
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.match(/duplicate key value.*UQ_email.*/)) {
          throw new Error('Email is already registered.');
        }
      }

      throw err;
    }
  }
}

export default CreateUser;
