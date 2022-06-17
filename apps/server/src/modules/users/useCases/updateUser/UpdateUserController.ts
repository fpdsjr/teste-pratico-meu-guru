import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { UpdateUserUseCase } from './UpdateUserUseCase.';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, email, senha } = request.body;
    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const updateUser = await updateUserUseCase.execute({ id, nome, email, senha });

    return response.status(200).json(updateUser);
  }
}

export { UpdateUserController };
