import { UsersRepositoryInMemory } from '~/modules/users/infra/repositories/in-memory/UsersRepositoryInMemory';

import { UpdateUserUseCase } from './UpdateUserUseCase.';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let updateUserUseCase: UpdateUserUseCase;

describe('Update User UseCase', () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    updateUserUseCase = new UpdateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to update a user', async () => {
    const createUser = await usersRepositoryInMemory.createUser({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    const updateUser = {
      id: createUser.id,
      nome: 'Flávio Pereira',
      email: 'fpdsjr@mail.com',
      senha: '123456789',
    };

    const response = await updateUserUseCase.execute(updateUser);

    expect(response.id).toBe(createUser.id);
    expect(response.nome).toBe('Flávio Pereira');
    expect(response.email).toBe('fpdsjr@mail.com');
  });
});
