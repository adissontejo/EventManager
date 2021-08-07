import { getUsersRepository } from '../repositories';

type params = {
  name: string;
  email: string;
  password: string;
};

class CreateUserService {
  async execute({ name, email, password }: params) {
    const usersRepository = getUsersRepository();

    const user = await usersRepository.save({
      name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserService;
