import { prisma } from "../lib/prisma";

export const getTodos = async () => {
    const user = await prisma.user.create({
        data: {
          name: "Alice",
          email: "alice@prisma.io",
          posts: {
            create: [
            {
              title: "Hello World",
              content: "This is my first post!",
              published: true,
            },
            {
                title: 'My Name Is Sheela',
                content: "This is my first dance video",
                published: true,
            }
        ],
          },
        },
        include: {
          posts: true,
        },
      });

    return user;
}