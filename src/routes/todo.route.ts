import { Router } from "express";
import type { IRouter } from "express";
import { handleCompletedTodo, handleCreateTodo, handleDeleteTodo, handleGetTodo, handleUpdateTodo } from "../controllers/todo.controller";

const router: IRouter = Router();

router.get('/', handleGetTodo);

router.post('/', handleCreateTodo);

router.patch('/:id', handleUpdateTodo);

router.patch('/completed/:id', handleCompletedTodo)

router.delete('/:id', handleDeleteTodo);

export default router;