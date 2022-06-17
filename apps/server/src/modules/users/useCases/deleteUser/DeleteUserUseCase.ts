import { IUsersRepository } from '~/modules/users/infra/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string) {
    const deleteUser = await this.usersRepository.deleteUser(id);

    return deleteUser;
  }
}

export { DeleteUserUseCase };
