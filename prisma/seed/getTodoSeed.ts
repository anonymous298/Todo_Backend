import { prisma } from "../../src/lib/prisma";

export const getTodo = async () => {
    try {

        console.log("GetTodo Seed Running...")

        const data = await prisma.todo.findMany({});
        return data;

    } catch (error) {
        console.log(error)
    }
}