import { CreateUserController } from '~/modules/users/useCases/createUser/CreateUserController';
import { Router } from 'express';

import { validateUser } from '../middlewares/validateUser';

const usersRouters = Router();

const createUserController = new CreateUserController();

usersRouters.post('/create', validateUser, createUserController.handle);

export { usersRouters };
