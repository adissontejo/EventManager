import { Request, Response, Router } from 'express';

import { getUsersRepository } from '../repositories';

const usersRouter = Router();

usersRouter.get('/', async (req: Request, res: Response) => {
  const usersRepository = getUsersRepository();

  const users = await usersRepository.find();

  return res.json(users);
});

export default usersRouter;
