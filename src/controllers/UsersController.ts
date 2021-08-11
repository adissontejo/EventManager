import { Request, Response } from 'express';

import {
  AuthenticateUserService,
  CreateUserService,
  DeleteUserService,
  ListUsersService,
  UpdateUserService,
} from '~/services';

class UsersController {
  async authenticate(req: Request, res: Response) {
    const authenticateUser = new AuthenticateUserService();

    const token = await authenticateUser.execute(req.body);

    return res.json({ token });
  }

  async create(req: Request, res: Response) {
    const createUser = new CreateUserService();

    const user = await createUser.execute(req.body);

    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ ...req.locals, ...req.body });

    return res.json({ message: 'User has been succesfully deleted.' });
  }

  async list(req: Request, res: Response) {
    const listUsers = new ListUsersService();

    const users = await listUsers.execute({ ...req.body, ...req.query });

    return res.json(users);
  }

  async update(req: Request, res: Response) {
    const updateUser = new UpdateUserService();

    await updateUser.execute({ ...req.locals, ...req.body });

    return res.json({ message: 'User has been succesfully updated.' });
  }
}

export default UsersController;
