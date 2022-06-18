import { User } from '~/modules/users/infra/entities/user';
import { IUsersRepository } from '~/modules/users/infra/repositories/IUsersRepository';
import { AppError } from '~/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  page: number;
  limit: number;
  filter: 'nome' | 'email';
  search: string;
}

@injectable()
class ListUsersByPaginationUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ page, limit, filter, search }: IRequest): Promise<Omit<User, 'senha'>[]> {
    try {
      const listUsersByPagination = await this.usersRepository.listUsersByPagination({ page, limit, filter, search });

      return listUsersByPagination;
    } catch {
      throw new AppError('Não foi possível encontrar um resultado valido para o filtro', 404);
    }
  }
}

export { ListUsersByPaginationUseCase };
