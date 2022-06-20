import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '~/modules/users/dtos/IUpdateUserDTO';
import { User } from '~/modules/users/infra/entities/user';

import { IListUsersByPaginationDTO } from '../../dtos/IListUsersByPaginationDTO';

interface IUsersRepository {
  createUser({ nome, email, senha }: ICreateUserDTO): Promise<Omit<User, 'senha'>>;
  updateUser({ id, nome, email, senha }: IUpdateUserDTO): Promise<Omit<User, 'senha'>>;
  deleteUser(id: number): Promise<Omit<User, 'senha'>>;
  listUsersByPagination({ page, limit, filter, search }: IListUsersByPaginationDTO): Promise<Omit<User, 'senha'>[]>;
  listUsersWithoutFilter({ page, limit }: { page: number; limit: number }): Promise<Omit<User, 'senha'>[]>;
}

export { IUsersRepository };
