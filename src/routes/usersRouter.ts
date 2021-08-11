import { Router } from 'express';

import { UsersController } from '~/controllers';
import { ensureAuthenticated } from '~/middlewares';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/login', usersController.authenticate);

usersRouter.post('/', usersController.create);

usersRouter.delete('/', ensureAuthenticated, usersController.delete);

usersRouter.get('/', usersController.list);

usersRouter.put('/', ensureAuthenticated, usersController.update);

export default usersRouter;
