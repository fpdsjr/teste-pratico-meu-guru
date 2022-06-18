import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';

import '~/shared/container';
import { errorHandle } from './middlewares/errorHandle';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use(errorHandle);

export { app };
