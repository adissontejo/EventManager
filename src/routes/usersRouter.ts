import { Router } from 'express';

import { CreateUserController, ListUsersController } from '../controllers';

const usersRouter = Router();

const createUser = new CreateUserController();

const listUsers = new ListUsersController();

usersRouter.post('/', createUser.handle);

usersRouter.get('/', listUsers.handle);

export default usersRouter;
