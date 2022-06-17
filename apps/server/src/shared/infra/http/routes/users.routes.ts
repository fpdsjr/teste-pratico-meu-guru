import { CreateUserController } from '~/modules/users/useCases/createUser/CreateUserController';
import { DeleteUserController } from '~/modules/users/useCases/deleteUser/DeleteUserController';
import { UpdateUserController } from '~/modules/users/useCases/updateUser/UpdateUserController';
import { Router } from 'express';

import { validateUser } from '../middlewares/validateUser';

const usersRouters = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRouters.post('/create', validateUser, createUserController.handle);

usersRouters.put('/update/:id', validateUser, updateUserController.handle);

usersRouters.delete('/delete/:id', deleteUserController.handle);

export { usersRouters };
