import { prisma } from "../../src/lib/prisma";

export const deleteTodo = async (id: string) => {
    try {
        
        console.log("Running DeleteTodoSeed...");

        await prisma.todo.delete({
            where: {
                id,
            }
        });

    } catch (error) {
        console.log(error);
    }
}