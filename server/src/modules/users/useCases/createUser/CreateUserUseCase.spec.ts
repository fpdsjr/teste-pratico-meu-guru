import { UsersRepositoryInMemory } from '../../infra/repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create User UseCase', () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const newUser = {
      nome: 'Flávio Junior',
      email: 'flaviofpds.jr@mail.com',
      senha: '12345678',
    };

    const response = await createUserUseCase.execute(newUser);

    expect(response).toHaveProperty('id');
    expect(response.nome).toBe('Flávio Junior');
  });
});
