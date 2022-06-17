import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
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
}

export { UsersRepositoryInMemory };
