import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '~/modules/users/dtos/IUpdateUserDTO';
import { User } from '~/modules/users/infra/entities/user';

interface IUsersRepository {
  createUser({ nome, email, senha }: ICreateUserDTO): Promise<User>;
  updateUser({ nome, email, senha }: IUpdateUserDTO): Promise<User>;
}

export { IUsersRepository };
