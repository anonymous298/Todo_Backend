import { prisma } from "../src/lib/prisma";
import { createTodo } from "./seed/createTodoSeed";
import { deleteTodo } from "./seed/deleteTodoSeed";
import { getTodo } from "./seed/getTodoSeed";
import { updateTodo } from "./seed/updateTodoSeed";


async function main() {
    console.log("🌱 Seeding database...");

    // await createTodo("What Is Machine Learning")
    // await createTodo("How Backend Works", "Backend is a Server in which...")

    // const data = await getTodo();

    // console.log(data);

    // await updateTodo("cmqhbyghg00003wgm67iscg86", "What Is An API", "Application Programming Interface");

    // await deleteTodo("cmqhbyghg00003wgm67iscg86");

}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());