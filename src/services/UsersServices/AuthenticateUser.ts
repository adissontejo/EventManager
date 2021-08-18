import { sign } from 'jsonwebtoken';

import { checkMissingParams } from '~/functions';
import { getUsersRepository } from '~/repositories';

type params = {
  email: string;
  password: string;
};

class AuthenticateUser {
  async execute({ email, password }: params) {
    checkMissingParams({ email, password });

    const usersRepository = getUsersRepository();

    const user = await usersRepository.authenticateWithEncrypt(email, password);

    console.log(user);

    if (!user) {
      throw new Error('Invalid email or password.');
    }

    const token = sign({ email }, process.env.PRIVATE_KEY, {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  }
}

export default AuthenticateUser;
