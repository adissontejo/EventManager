import { hash } from 'bcryptjs';

import { checkMissingParams } from '~/functions';
import { getUsersRepository } from '~/repositories';

type params = {
  name: string;
  email: string;
  password: string;
};

class CreateUser {
  async execute({ name, email, password }: params) {
    try {
      checkMissingParams({ name, email, password });

      const usersRepository = getUsersRepository();

      const hashPassword = await hash(password, 8);

      const user = await usersRepository.save({
        name,
        email,
        password: hashPassword,
      });

      delete user.password;

      return user;
    } catch (err) {
      if (err.message.match(/duplicate key value.*UQ_email.*/)) {
        throw new Error('Email is already registered.');
      }

      throw err;
    }
  }
}

export default CreateUser;
