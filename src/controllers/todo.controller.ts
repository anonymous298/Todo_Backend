import type { Request, Response } from "express"
import { createTodo, deleteTodo, getTodos, updateTodo } from "../service/todo.service"
import { prisma } from "../lib/prisma";
import type { DeleteTodoParams, UpdateTodoParams } from "../types/todo";

export const handleGetTodo = async (req: Request, res: Response) => {
    try {
        
        const data = await getTodos();

        if(!data) {
            res.status(404).json({message: "User Data Not Found"})
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500)
    }
}

export const handleCreateTodo = async (req: Request, res: Response) => {
    try {
        
        const { title, description } = req.body;

        const data = await createTodo(title, description);

        if(!data) res.status(404).json({message: "Not Able To Create Todo"});

        res.status(200).json({success: true, data: data});

    } catch (error) {
        
    }
}

export const handleUpdateTodo = async (req: Request<UpdateTodoParams>, res: Response) => {
    try {

        const data = await updateTodo(
            req.params.id,
            req.body.title,
            req.body.description,
        )

        if(!data) res.status(404).json({message: "Unable to update Todo"});

        res.status(200).json({success: true, data: data});
        
    } catch (error) {
        res.status(500).json({
            message: "Failed to update todo",
        });
    }
}

export const handleDeleteTodo = async (req: Request<DeleteTodoParams>, res: Response) => {
    try {

        const { id } = req.params;

        const data = await deleteTodo(id);

        if(!data.success) res.status(404).json({message: "Unable to Delete Todo"});

        res.status(200).json({success: true});

    } catch (error) {
        res.status(500).json({
            message: "Failed to Delete todo",
        });
    }
}