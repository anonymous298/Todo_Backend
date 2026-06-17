import { Router } from "express";
import type { IRouter } from "express";
import { handleCreateTodo, handleDeleteTodo, handleGetTodo, handleUpdateTodo } from "../controllers/todo.controller";

const router: IRouter = Router();

router.get('/', handleGetTodo);

router.post('/', handleCreateTodo);

router.patch('/:id', handleUpdateTodo);

router.delete('/:id', handleDeleteTodo);

export default router;