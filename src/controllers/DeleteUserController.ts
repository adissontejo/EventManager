import { Request, Response } from 'express';

import { DeleteUserService } from '../services';

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const deleteUser = new DeleteUserService();

    await deleteUser.execute(request.body);

    return response.json({
      message: 'User has been succesfully deleted.',
    });
  }
}

export default DeleteUserController;
