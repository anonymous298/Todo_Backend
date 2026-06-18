import express from 'express';
import cors from 'cors';

import type { Express } from 'express';

import todoRouter from './routes/todo.route'

export const app: Express = express();

app.use(cors())

app.use(express.json());

app.use('/todo', todoRouter);
