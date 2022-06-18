import { UsersRepositoryInMemory } from '~/modules/users/infra/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '~/shared/errors/AppError';

import { ListUsersByPaginationUseCase } from './ListUsersByPaginationUseCase';

let listUsersByPaginationUseCase: ListUsersByPaginationUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe('List Users By Pagination UseCase', () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    listUsersByPaginationUseCase = new ListUsersByPaginationUseCase(usersRepositoryInMemory);
  });

  afterEach(() => {
    usersRepositoryInMemory.usersRepository = [];
  });

  it('should be able to list Users By Pagination', async () => {
    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Pereira',
      email: 'another@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio dos santos',
      email: 'santos@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Santos',
      email: 'fpdsjr@mail.com',
      senha: '123456',
    });

    const queryParams = { page: 0, limit: 2, filter: 'undefined' as 'email' | 'nome', search: 'undefined' };

    const response = await listUsersByPaginationUseCase.execute(queryParams);

    expect(response.length).toBe(2);
  });

  it('should be able to list Users By Pagination using name as filter', async () => {
    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Pereira',
      email: 'another@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio dos santos',
      email: 'santos@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Santos',
      email: 'fpdsjr@mail.com',
      senha: '123456',
    });

    const queryParams = { page: 0, limit: 10, filter: 'nome' as const, search: 'Flávio Junior' };

    const response = await listUsersByPaginationUseCase.execute(queryParams);

    expect(response.length).toBe(3);
  });

  it('should be able to list Users By Pagination using email as filter', async () => {
    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Pereira',
      email: 'another@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Pereira',
      email: 'another@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio dos santos',
      email: 'santos@mail.com',
      senha: '123456',
    });

    await usersRepositoryInMemory.createUser({
      nome: 'Flávio Santos',
      email: 'fpdsjr@mail.com',
      senha: '123456',
    });

    const queryParams = { page: 0, limit: 10, filter: 'email' as const, search: 'another@mail.com' };

    const response = await listUsersByPaginationUseCase.execute(queryParams);

    expect(response.length).toBe(2);
  });
});
