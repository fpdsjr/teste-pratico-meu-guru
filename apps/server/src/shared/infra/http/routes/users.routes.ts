import { CreateUserController } from '~/modules/users/useCases/createUser/CreateUserController';
import { DeleteUserController } from '~/modules/users/useCases/deleteUser/DeleteUserController';
import { ListUsersByPaginationController } from '~/modules/users/useCases/listUsersByPagination/ListUsersByPaginationController';
import { UpdateUserController } from '~/modules/users/useCases/updateUser/UpdateUserController';
import { Router } from 'express';

import { validateUser } from '../middlewares/validateUser';

const usersRouters = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const listUsersByPaginationController = new ListUsersByPaginationController();

usersRouters.post('/create', validateUser, createUserController.handle);

usersRouters.put('/update/:id', validateUser, updateUserController.handle);

usersRouters.get('/list', listUsersByPaginationController.handle);

usersRouters.delete('/delete/:id', deleteUserController.handle);

export { usersRouters };
