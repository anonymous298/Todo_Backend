import { prisma } from "../../src/lib/prisma";

export const updateTodo = async (id: string, title: string, description: string) => {
    try {
        
        console.log("Running UpdateTodoSeed...");

        await prisma.todo.update({
            where: {
                id,
            },

            data: {
                title,
                description,
            }
        });

    } catch (error) {
        console.log(error);
    }
}