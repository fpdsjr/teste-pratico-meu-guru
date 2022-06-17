import { User } from '~/modules/users/infra/entities/user';
import { IUsersRepository } from '~/modules/users/infra/repositories/IUsersRepository';
import argon from 'argon2';
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
    const hashPassword = await argon.hash(senha);

    const createUser = await this.usersRepository.createUser({ nome, email, senha: hashPassword });

    return createUser;
  }
}

export { CreateUserUseCase };
