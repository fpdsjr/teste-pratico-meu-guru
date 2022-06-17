import { IUsersRepository } from '~/modules/users/infra/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id, nome, email, senha }: IRequest) {
    const updateUser = await this.usersRepository.updateUser({ id, nome, email, senha });

    return updateUser;
  }
}

export { UpdateUserUseCase };
