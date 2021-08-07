import { Request, Response } from 'express';

import { ListUsersService } from '../services';

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsers = new ListUsersService();

    const users = await listUsers.execute({
      ...request.body,
      ...request.query,
    });

    return response.json(users);
  }
}

export default ListUsersController;
