import { Router } from "express";
import type { IRouter } from "express";
import { handleGetTodo } from "../controllers/todo.controller";

const router: IRouter = Router();

router.get('/', handleGetTodo);


export default router;