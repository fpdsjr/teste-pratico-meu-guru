import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '~/modules/users/dtos/IUpdateUserDTO';
import { User } from '~/modules/users/infra/entities/user';

import { IListUsersByPaginationDTO } from '../../dtos/IListUsersByPaginationDTO';

interface IUsersRepository {
  createUser({ nome, email, senha }: ICreateUserDTO): Promise<User>;
  updateUser({ id, nome, email, senha }: IUpdateUserDTO): Promise<User>;
  deleteUser(id: string): Promise<User>;
  listUsersByPagination({ page, limit, filter, search }: IListUsersByPaginationDTO): Promise<User[]>;
  listUsersWithoutFilter({ page, limit }: { page: number; limit: number }): Promise<User[]>;
}

export { IUsersRepository };
