import { Router } from 'express';

import { UsersController } from '~/controllers';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', usersController.create);

usersRouter.delete('/', usersController.delete);

usersRouter.get('/', usersController.list);

usersRouter.put('/', usersController.update);

export default usersRouter;
