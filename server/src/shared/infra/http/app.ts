import 'reflect-metadata';
import express from 'express';
import '~/shared/container';

const app = express();

app.use(express.json());

export { app };
