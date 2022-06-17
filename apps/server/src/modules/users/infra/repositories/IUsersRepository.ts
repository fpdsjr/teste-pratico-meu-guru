import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '~/modules/users/dtos/IUpdateUserDTO';
import { User } from '~/modules/users/infra/entities/user';

interface IUsersRepository {
  createUser({ nome, email, senha }: ICreateUserDTO): Promise<User>;
  updateUser({ id, nome, email, senha }: IUpdateUserDTO): Promise<User>;
  deleteUser(id: string): Promise<User>;
}

export { IUsersRepository };
