import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { User } from '~/modules/users/infra/entities/user';
import { prisma } from '~/shared/infra/database/prisma';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  async createUser({ nome, email, senha }: ICreateUserDTO): Promise<User> {
    const createUser = await prisma.users.create({
      data: {
        nome,
        email,
        senha,
      },
    });

    return createUser;
  }
}

export { UsersRepository };
