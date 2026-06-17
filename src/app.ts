import express from 'express';

import type { Express } from 'express';

import todoRouter from './routes/todo.route'

export const app: Express = express();


app.use(express.json());

app.use('/todo', todoRouter);
