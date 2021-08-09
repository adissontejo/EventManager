import { Router } from 'express';

import {
  CreateUserController,
  DeleteUserController,
  ListUsersController,
} from '../controllers';

const usersRouter = Router();

const createUser = new CreateUserController();

const deleteUser = new DeleteUserController();

const listUsers = new ListUsersController();

usersRouter.post('/', createUser.handle);

usersRouter.delete('/', deleteUser.handle);

usersRouter.get('/', listUsers.handle);

export default usersRouter;
