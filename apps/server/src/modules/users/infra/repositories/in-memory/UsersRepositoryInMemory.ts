import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '~/modules/users/dtos/IUpdateUserDTO';
import { User } from '~/modules/users/infra/entities/user';
import { AppError } from '~/shared/errors/AppError';

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
}

export { UsersRepositoryInMemory };
