import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserUseCase } from './DeleteUserUseCase';

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);

    const deleteUser = await deleteUserUseCase.execute(Number(id));

    return response.status(200).json(deleteUser);
  }
}

export { DeleteUserController };
