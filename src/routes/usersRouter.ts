import { Router } from 'express';

import {
  CreateUserController,
  DeleteUserController,
  ListUsersController,
  UpdateUserController,
} from '../controllers';

const usersRouter = Router();

const createUser = new CreateUserController();

const deleteUser = new DeleteUserController();

const listUsers = new ListUsersController();

const updateUser = new UpdateUserController();

usersRouter.post('/', createUser.handle);

usersRouter.delete('/', deleteUser.handle);

usersRouter.get('/', listUsers.handle);

usersRouter.put('/', updateUser.handle);

export default usersRouter;
