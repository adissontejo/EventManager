import { Request, Response } from 'express';

import { CreateUserService } from '../services';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUser = new CreateUserService();

    const user = await createUser.execute(request.body);

    return response.json(user);
  }
}

export default CreateUserController;
