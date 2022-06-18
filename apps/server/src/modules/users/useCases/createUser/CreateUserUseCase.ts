import { User } from '~/modules/users/infra/entities/user';
import { IUsersRepository } from '~/modules/users/infra/repositories/IUsersRepository';
import { hashPassword } from '~/utils/hashPassword';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  nome: string;
  email: string;
  senha: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ nome, email, senha }: IRequest): Promise<User> {
    const hash = await hashPassword(senha);

    const createUser = await this.usersRepository.createUser({ nome, email, senha: hash });

    return createUser;
  }
}

export { CreateUserUseCase };
