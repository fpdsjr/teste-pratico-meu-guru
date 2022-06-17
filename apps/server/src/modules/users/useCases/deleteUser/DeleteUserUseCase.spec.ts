import { UsersRepositoryInMemory } from '../../infra/repositories/in-memory/UsersRepositoryInMemory';
import { DeleteUserUseCase } from './DeleteUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let deleteUserUseCase: DeleteUserUseCase;

describe('Delete User UseCase', () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    deleteUserUseCase = new DeleteUserUseCase(usersRepositoryInMemory);
  });
  it('should be able to soft delete a user', async () => {
    const createUser = await usersRepositoryInMemory.createUser({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    const response = await deleteUserUseCase.execute(createUser.id);

    expect(response.deletado).toBe(true);
  });
});
