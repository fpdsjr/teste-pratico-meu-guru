import { CreateUserController } from '~/modules/users/useCases/createUser/CreateUserController';
import { UpdateUserController } from '~/modules/users/useCases/updateUser/UpdateUserController';
import { Router } from 'express';

import { validateUser } from '../middlewares/validateUser';

const usersRouters = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

usersRouters.post('/create', validateUser, createUserController.handle);

usersRouters.put('/update/:id', validateUser, updateUserController.handle);

export { usersRouters };
