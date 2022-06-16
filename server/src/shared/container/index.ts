import { UsersRepository } from '~/modules/users/infra/repositories/implementations/UsersRepository';
import { IUsersRepository } from '~/modules/users/infra/repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
