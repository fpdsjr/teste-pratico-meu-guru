import { User } from '~/modules/users/infra/entities/user';
import { IUsersRepository } from '~/modules/users/infra/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  page: number;
  limit: number;
  filter: string;
  param: string;
}

@injectable()
class ListUsersByPaginationUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ page, limit, filter, param }: IRequest): Promise<User[] | undefined> {
    if (!filter && !param) {
      const listUsersWithoutFilter = await this.usersRepository.listUsersWithoutFilter({ page, limit });

      return listUsersWithoutFilter;
    }

    const listUsersByPagination = await this.usersRepository.listUsersByPagination({ page, limit, filter, param });

    return listUsersByPagination;
  }
}

export { ListUsersByPaginationUseCase };
