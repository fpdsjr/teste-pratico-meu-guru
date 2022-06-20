import { User } from '~/modules/users/infra/entities/user';
import { IUsersRepository } from '~/modules/users/infra/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: number): Promise<Omit<User, 'senha'>> {
    const deleteUser = await this.usersRepository.deleteUser(id);

    return deleteUser;
  }
}

export { DeleteUserUseCase };
