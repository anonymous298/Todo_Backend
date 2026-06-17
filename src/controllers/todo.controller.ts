import type { Request, Response } from "express"
import { getTodos } from "../service/todo.service"

export const handleGetTodo = async (req: Request, res: Response) => {
    try {
        const data = await getTodos();

        res.status(200).json(data);

    } catch (error) {
        res.status(500)
    }
}