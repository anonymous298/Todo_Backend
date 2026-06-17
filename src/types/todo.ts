import type { status } from "../../generated/prisma/enums"

export interface Todo {
    id: string
    title: string
    description: string | null
    status: status
    isCompleted: boolean
    createdAt: Date
    updatedAt: Date
}

export type UpdateTodoParams = {
    id: string;
};

export type DeleteTodoParams = {
    id: string;
};