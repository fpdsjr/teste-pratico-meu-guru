import { Router } from 'express';

import { usersRouters } from './users.routes';

const router = Router();

router.use('/users', usersRouters);

export { router };
