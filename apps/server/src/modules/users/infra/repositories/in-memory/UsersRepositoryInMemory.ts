import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { IListUsersByPaginationDTO } from '~/modules/users/dtos/IListUsersByPaginationDTO';
import { IUpdateUserDTO } from '~/modules/users/dtos/IUpdateUserDTO';
import { User } from '~/modules/users/infra/entities/user';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  usersRepository: User[] = [];

  async createUser({ nome, email, senha }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      nome,
      email,
      senha,
    });

    this.usersRepository.push(user);

    return user;
  }

  async findUserById(id: string): Promise<User> {
    const findUserById = this.usersRepository.find(user => user.id === id);

    return findUserById!;
  }

  async updateUser({ id, nome, email, senha }: IUpdateUserDTO): Promise<User> {
    const findUser = await this.findUserById(id);

    const updateUser = Object.assign(findUser, {
      id,
      nome,
      email,
      senha,
    });

    this.usersRepository.push(updateUser);

    return updateUser;
  }

  async deleteUser(id: string): Promise<User> {
    const findUser = await this.findUserById(id);

    const deleteUser = { ...findUser, deletado: true };

    return deleteUser;
  }

  async listUsersWithoutFilter({ page, limit }: { page: number; limit: number }): Promise<User[]> {
    const spliceUsersArray = this.usersRepository.slice(page * 10, limit);

    return spliceUsersArray;
  }

  async listUsersByPagination({ page, limit, filter, search }: IListUsersByPaginationDTO): Promise<User[]> {
    const undefinedMatch = 'undefined' as 'email' | 'nome';

    if (filter === undefinedMatch && search === undefinedMatch) {
      return this.listUsersWithoutFilter({ page, limit });
    }

    const filterUsers = this.usersRepository.filter(users => users[filter] === search);

    if (filterUsers.length === 0) {
      throw new Error();
    }

    const spliceUsersArray = filterUsers.splice(page * 10, limit);

    return spliceUsersArray;
  }
}

export { UsersRepositoryInMemory };
