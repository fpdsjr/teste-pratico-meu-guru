import { ICreateUserDTO } from '~/modules/users/dtos/ICreateUserDTO';
import { User } from '~/modules/users/infra/entities/user';

interface IUsersRepository {
  createUser({ nome, email, senha }: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository };
