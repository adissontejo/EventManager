import { hash } from 'bcryptjs';

import { checkMissingParams, ignoreUndefinedParams } from '~/functions';
import { getUsersRepository } from '~/repositories';

type params = {
  id: string;
  name?: string;
  email?: string;
  password?: string;
};

class UpdateUser {
  async execute({ id, name, email, password }: params) {
    checkMissingParams({ id });

    const newData = ignoreUndefinedParams<params>({
      id,
      name,
      email,
      password,
    });

    if (password) {
      newData.password = await hash(password, 8);
    }

    const usersRepository = getUsersRepository();

    await usersRepository.update(id, newData);
  }
}

export default UpdateUser;
