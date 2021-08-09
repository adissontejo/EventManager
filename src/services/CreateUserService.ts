import { checkMissingParams } from '../functions';
import { getUsersRepository } from '../repositories';

type params = {
  name: string;
  email: string;
  password: string;
};

class CreateUserService {
  async execute({ name, email, password }: params) {
    try {
      checkMissingParams({ name, email, password });

      const usersRepository = getUsersRepository();

      const user = await usersRepository.save({
        name,
        email,
        password,
      });

      return user;
    } catch (err) {
      if (err.message.match(/duplicate key value.*UQ_email.*/)) {
        throw new Error('Email is already registered.');
      }

      throw err;
    }
  }
}

export default CreateUserService;
