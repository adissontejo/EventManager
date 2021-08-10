import { Request, Response } from 'express';

import { UpdateUserService } from '../services';

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const updateUser = new UpdateUserService();

    await updateUser.execute(request.body);

    return response.json({
      message: 'User has been succesfully updated.',
    });
  }
}

export default UpdateUserController;
