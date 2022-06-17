import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '~/modules/users/dtos/IUpdateUserDTO';
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

  async updateUser({ id, nome, email, senha }: IUpdateUserDTO): Promise<User> {
    const updateUser = await prisma.users.update({
      where: {
        id,
      },
      data: {
        nome,
        email,
        senha,
      },
    });

    return updateUser;
  }

  async deleteUser(id: string): Promise<User> {
    const softDeleteUser = await prisma.users.delete({
      where: {
        id,
      },
    });

    return softDeleteUser;
  }
}

export { UsersRepository };
