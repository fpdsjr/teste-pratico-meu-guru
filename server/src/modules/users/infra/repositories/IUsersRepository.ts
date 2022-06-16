import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../entities/user';

interface IUsersRepository {
  createUser({ nome, email, senha }: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository };
