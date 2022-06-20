import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { IListUsersByPaginationDTO } from '~/modules/users/dtos/IListUsersByPaginationDTO';
import { IUpdateUserDTO } from '~/modules/users/dtos/IUpdateUserDTO';
import { User } from '~/modules/users/infra/entities/user';
import { prisma } from '~/shared/infra/database/prisma';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  async createUser({ nome, email, senha }: ICreateUserDTO): Promise<Omit<User, 'senha'>> {
    const createUser = await prisma.users.create({
      data: {
        nome,
        email,
        senha,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        deletado: true,
      },
    });

    return createUser;
  }

  async updateUser({ id, nome, email, senha }: IUpdateUserDTO): Promise<Omit<User, 'senha'>> {
    const updateUser = await prisma.users.update({
      where: {
        id,
      },
      data: {
        nome,
        email,
        senha,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        deletado: true,
      },
    });

    return updateUser;
  }

  async deleteUser(id: number): Promise<Omit<User, 'senha'>> {
    const softDeleteUser = await prisma.users.delete({
      where: {
        id,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        deletado: true,
      },
    });

    return softDeleteUser;
  }

  async listUsersWithoutFilter({ page, limit = 10 }: { page: number; limit: number }): Promise<Omit<User, 'senha'>[]> {
    const listUsersWithoutFilter = await prisma.users.findMany({
      skip: page * 10,
      take: limit,
      select: {
        id: true,
        nome: true,
        email: true,
        deletado: true,
      },
      orderBy: {
        nome: 'asc',
      },
    });

    return listUsersWithoutFilter;
  }

  async listUsersByPagination({ page, limit, filter, search }: IListUsersByPaginationDTO): Promise<Omit<User, 'senha'>[]> {
    if (!filter && !search) {
      return this.listUsersWithoutFilter({ page, limit });
    }

    const listUsersByPagination = await prisma.users.findMany({
      skip: page * 10,
      take: limit,
      where: {
        [filter]: {
          contains: search,
        },
      },
      select: {
        id: true,
        nome: true,
        email: true,
        deletado: true,
      },
      orderBy: {
        nome: 'asc',
      },
    });

    return listUsersByPagination;
  }
}

export { UsersRepository };
