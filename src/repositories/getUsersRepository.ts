import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

import { User } from '~/models';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  async authenticateWithEncrypt(email: string, password: string) {
    const queryBuilder = this.createQueryBuilder();

    const results = await queryBuilder
      .where(`email = '${email}'`)
      .andWhere(`password = crypt('${password}', password)`)
      .getOne();

    return results;
  }

  async createWithEncrypt(password: string, rest: Object) {
    const queryBuilder = this.createQueryBuilder();

    const results = await queryBuilder
      .insert()
      .values({
        ...rest,
        password: () => `crypt('${password}', gen_salt('bf'))`,
      })
      .execute();

    return { ...results.raw[0], ...rest };
  }

  async deleteWithConfirmation(id: string, password: string) {
    const queryBuilder = this.createQueryBuilder();

    const results = await queryBuilder
      .delete()
      .where(`id = '${id}'`)
      .andWhere(`password = crypt('${password}', password)`)
      .execute();

    return results;
  }

  async updateWithEncrypt(
    id: string,
    password: string,
    oldPassword: string,
    rest: Object
  ) {
    const queryBuilder = this.createQueryBuilder();

    const results = await queryBuilder
      .update()
      .set({
        ...rest,
        password: () => `crypt('${password}', gen_salt('bf'))`,
      })
      .where(`id = '${id}'`)
      .andWhere(`password = crypt('${oldPassword}', password)`)
      .execute();

    return results;
  }
}

const getUsersRepository = () => {
  return getCustomRepository(UsersRepository);
};

export default getUsersRepository;
