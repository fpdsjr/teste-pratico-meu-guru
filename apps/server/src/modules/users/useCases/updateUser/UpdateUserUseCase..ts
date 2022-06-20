import { IUsersRepository } from '~/modules/users/infra/repositories/IUsersRepository';
import { hashPassword } from '~/utils/hashPassword';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: number;
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
    const hash = await hashPassword(senha);

    const updateUser = await this.usersRepository.updateUser({ id, nome, email, senha: hash });

    return updateUser;
  }
}

export { UpdateUserUseCase };
