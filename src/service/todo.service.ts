import { prisma } from "../lib/prisma";


// Service Backend Function To Fetch All TODOS
export const getTodos = async () => {
  try {
    
    const data = await prisma.todo.findMany({});

    return data;

  } catch (error) {
    return {success: false, error: error}
  }
}


// Service Backend Function To Create TODO
export const createTodo = async (title: string, description: string) => {
  try {
    if(!title) return;

    const data = await prisma.todo.create({
      data: {
        title,
        description,
      }
    });

    return data;

  } catch (error) {
    return {success: false, error: error}
  }
}

export const updateTodo = async (id: string, title: string, description: string) => {
  try {
    if(!title) return;

    const data = await prisma.todo.update({
      where : {
        id,
      },

      data : {
        title,
        description,
      }
    })

    return data;


  } catch (error) {
    return {success: false, error: error}
  }
}

export const deleteTodo = async (id: string) => {
  try {
    
    await prisma.todo.delete({
      where : {
        id,
      }
    })

    return {success: true}

  } catch (error) {
    return {success: false, error: error}
  }
}