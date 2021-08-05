import { Router } from 'express';

import { ListUsersController } from '../controllers';

const usersRouter = Router();

const listUsers = new ListUsersController();

usersRouter.get('/', listUsers.handle);

export default usersRouter;
