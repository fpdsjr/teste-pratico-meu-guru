import { CreateUserController } from '~/modules/users/useCases/CreateUserController';
import { Router } from 'express';

const usersRouters = Router();

const createUserController = new CreateUserController();

usersRouters.post('/create', createUserController.handle);

export { usersRouters };
