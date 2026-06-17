import { prisma } from "../../src/lib/prisma";

export const createTodo = async (title: string, description: string = 'desc...') => {
    try {

        console.log("Seeding CreateTodoSeed...")

        await prisma.todo.create({
            data : {
                title,
                description,
            }
        })

    } catch (error) {
        console.log(error)
    }
}